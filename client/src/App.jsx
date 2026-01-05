
import { createBrowserRouter } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Login from "./pages/Login"
import HeroSection from "./pages/student/HeroSection"
import MainLayout from "./layout/MainLayout"
import { RouterProvider } from "react-router"
import Cources from "./pages/student/Cources"
import MyLearning from "./pages/student/MyLearning"
import Profile from "./pages/student/Profile"
import Sidebar from "./pages/admin/Sidebar"
import Dashboard from "./pages/admin/Dashboard"
import CourseTable from "./pages/admin/course/CourseTable"
import AddCourse from "./pages/admin/course/AddCourse"
import EditCourse from "./pages/admin/course/EditCourse"
import CreateLecture from "./pages/admin/licture/CreateLecture"
import EditLecture from "./pages/admin/licture/EditLecture"
import CourseDetail from "./pages/student/CourseDetail"
import CourseProgress from "./pages/student/CourseProgress"
import CoursePurchase from './pages/student/PurchasePage'
import SearchPage from "./pages/student/SearchPage"
import { AdminRoute, AuthenticatedUser, ProtectedRoute } from "./components/ui/ProtectedRoutes"
import PurchaseCourseProtectedRoute from "./components/ui/PurchaseCourseProtectedRoute"
import {ThemeProvider} from "./components/ui/ThemeProvider"



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (

          <>
            <HeroSection />
            {/* course  */}
            <Cources />

          </>
        ),
      },
      {
        path: "login",
        element: <AuthenticatedUser><Login /></AuthenticatedUser>
      },
      {
        path: "my-learning",
        element: <ProtectedRoute><MyLearning /></ProtectedRoute>
      },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: "course-detail/:courseId",
        element: <ProtectedRoute><CourseDetail /></ProtectedRoute>
      },
      {
        path: "course-progress/:courseId",
        element: <ProtectedRoute>
          <PurchaseCourseProtectedRoute>
            <CourseProgress />
          </PurchaseCourseProtectedRoute>
        </ProtectedRoute>
      },
      {
        path: "course/search",
        element: <ProtectedRoute><SearchPage /></ProtectedRoute>

      },
      {
        path: "mock-pay/:courseId",
        element: <CoursePurchase />
      },
      // admin routes start from here
      {
        path: "admin",
        element: <AdminRoute><Sidebar /></AdminRoute>,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "create",
            element: <AddCourse />
          },
          {
            path: "course",
            element: <CourseTable />
          },
          {
            path: "course/:courseId",
            element: <EditCourse />
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />
          }
        ]
      }
    ]
  }
])


function App() {


  return (
    <main>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  )
}

export default App
