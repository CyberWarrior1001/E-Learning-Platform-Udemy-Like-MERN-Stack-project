import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { captureMockOrder, getAllPurchasedCourse, getCourseDetailWithPurchaseStatus, initiatePayment } from '../controllers/coursePurchase.controller.js';

const router = express.Router();

router.route('/checkout/create-checkout-session').post(isAuthenticated, initiatePayment)
router.route("/checkout/capture-mock-order").post(isAuthenticated, captureMockOrder);
router.route("/course/:courseId/detail-with-status").get(isAuthenticated, getCourseDetailWithPurchaseStatus)
router.route("/").get(isAuthenticated, getAllPurchasedCourse)


export default router;