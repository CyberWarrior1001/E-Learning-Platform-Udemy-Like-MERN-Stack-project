import { combineReducers } from '@reduxjs/toolkit'
import authRedcuer from '../features/authSlice'
import { authApi } from '@/features/api/authApi'
import { courseApi } from '@/features/api/courseApi';
import { purchaseApi } from '@/features/api/purchaseApi';
import { courseProgressApi } from '@/features/api/courseProgressApi';

const rootRedcuer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,
    [purchaseApi.reducerPath]:purchaseApi.reducer,
    [courseProgressApi.reducerPath]:courseProgressApi.reducer,
    
    auth:authRedcuer

})

export default rootRedcuer;