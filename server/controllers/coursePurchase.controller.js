import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";

export const initiatePayment = async (req, res) => {
  try {
    const userId = req.id;
    
    const { courseId } = req.body;
    const course = await Course.findById(courseId);

    if (!course) return res.status(404).json({ message: "course not found" });
    const amount = course.coursePrice;
    const paymentId = "MOCKTXN" + Date.now();

    await CoursePurchase.create({
      userId,
      courseId,
      amount,
      status: "pending",
      paymentId,
    });

    return res.json({
      checkoutUrl: `http://localhost:5173/mock-pay?paymentId=${paymentId}`,
      paymentId,
      amount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const captureMockOrder = async (req, res) => {
  try {
    const { paymentId } = req.body;
    const purchase = await CoursePurchase.findOne({ paymentId });
    if (!purchase)
      return res.status(404).json({ message: "Purchase not found" });
    purchase.status = "completed";
    await purchase.save();
    const course = await Course.findById(purchase.courseId).lean();
    if (course && Array.isArray(course.lectures) && course.lectures.length) {
      await Lecture.updateMany(
        { _id: { $in: course.lectures } },
        { $set: { isPreviewFree: true } }
      );
    }
     // add enrolledCourses to user and enrolledStudents to course
    await User.findByIdAndUpdate(
      purchase.userId,
      { $addToSet: { enrolledCourses: purchase.courseId } },
      { new: true }
    );

    await Course.findByIdAndUpdate(
      purchase.courseId,
      { $addToSet: { enrolledStudents: purchase.userId } },
      { new: true }
    );

    return res.json({ status: "completed", redirectUrl: `http://localhost:5173/course-progress/${purchase.courseId}` });
  } catch (error) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

export const getCourseDetailWithPurchaseStatus = async (req, res) => {
  try {
    const {courseId} = req.params;
    const userId = req.id;

    const course = await Course.findById(courseId).populate({path:"creator"}).populate({path:"lectures"});
    
    const purchased = await CoursePurchase.findOne({userId, courseId})
    console.log(req.id)

    if(!course){
      return res.status(404).json({ message:"course not found!" })
    }
    return res.status(200).json({
      course, 
      purchased: !!purchased
    })

    
  } catch (error) {
    console.log(error)
    
  }
  
};

export const getAllPurchasedCourse = async (req, res) => {
  try {
    const purchasedCourse = await CoursePurchase.find({status:"completed"}).populate("courseId")
    if(!purchasedCourse){
      return res.status(404).json({
        purchasedCourse: [],

      });
    }
    return res.status(200).json({
      purchasedCourse
    })
  } catch (error) {
    console.log(error)
  }
  
}
