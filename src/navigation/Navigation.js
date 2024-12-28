import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"; 
import WhatWeDo from "../pages/whatWeDo/WhatWeDo";
import Pricing from "../pages/pricing/Pricing";
import Faq from "../pages/faq/Faq";
import Login from "../pages/login/Login";
import GetStarted from "../pages/getStarted/GetStarted";
import Account from "../pages/socialAccounts/Account";
import Dashboard from "../pages/dashboard/Dashboard";
import CreatePost from "../pages/createPost/CreatePost";
import Inspiration from "../pages/inspiration/Inspiration";
import Stream from "../pages/stream/Stream";
import Planner from "../pages/planner/Planner";
import Calendar from "../pages/calendar/Calendar";
import Content from "../pages/content/Content";
import Schedule from "../pages/schedule/Schedule";
import PostSchedule from "../pages/postSchedule/PostSchedule";
import Require from "../pages/requireApproval/Require";
import Expire from "../pages/expire/Expire";
import Rejected from "../pages/rejected/Rejected"
import Bulk from "../pages/bulkMsg/Bulk"
import PostCreate from "../components/createPostComp/PostCreate";
import Ads from "../pages/advertise/Ads";
import Analytics from "../pages/analytics/Analytics";
import Facebook from "../pages/facebook/fb";
import Insta from "../pages/insta/insta";
import LinkedIn from "../pages/linkedIn/LinkedIn"
import UpgradePlan from "../pages/upgradePlan/UpgradePlan"
import Profile from "../pages/profile/Profile"
import ProfileSection from "../pages/profileSection/ProfileSection";
import AccountSetting from "../pages/accSetting/AccountSetting";
import Authentication from "../pages/authentication/Authentication";
import Security from "../pages/security/Security";
import PrivacyProfile from "../pages/privacy/PrivacyProfile";
import ResetPassword from "../pages/resetPasswordProfile/ResetPassword";
import Preference from "../pages/preference/Preference";
import VanityProfile from "../pages/vanityProfile/VanityProfile";
import Notification from "../pages/notificationProfile/NotificationProfile"
import AutoSchedule from "../pages/autoSchedule/AutoSchedule";
import ManageAccProfile from "../pages/manageAccProfile/ManageAccProfile"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatWeDo" element={<WhatWeDo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<GetStarted />} />
        <Route path="/socialAccounts" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Create-Post" element={<CreatePost />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/post-create" element={<PostCreate />} />
        <Route path="/Planner" element={<Planner />} />
        <Route path="/Planner/calendar" element={<Calendar />} />
        <Route path="/planner/content" element={<Content />} />
        <Route path="/planner/content/schedule" element={<Schedule />} />
        <Route path="/planner/content/Post-schedule" element={<PostSchedule />} />
        <Route path="/planner/content/require-Approval" element={<Require />} />
        <Route path="/planner/content/expire-approval" element={<Expire />} />
        <Route path="/planner/content/rejected" element={<Rejected />} />
        <Route path="/planner/content/bulk" element={<Bulk />} />
        <Route path="/advertise" element={<Ads />} />
        <Route path="/advertise/facebook_Boost" element={<Facebook />} />
        <Route path="/advertise/instagram_Boost" element={<Insta />} />
        <Route path="/advertise/linkedIn_Boost" element={<LinkedIn />} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/upgrade-plan/pricing" element={<UpgradePlan/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile/accountSetting" element={<AccountSetting/>} />
        <Route path="/profile/accountSetting/profileSection" element={<ProfileSection/>} />
        <Route path="/profile/accountSetting/authentication" element={<Authentication/>} />
        <Route path="/profile/accountSetting/security" element={<Security/>} />
        <Route path="/profile/accountSetting/privacy" element={<PrivacyProfile/>} />
        <Route path="/profile/accountSetting/reset-password" element={<ResetPassword/>} />
        <Route path="/profile/preference" element={<Preference/>} />
        <Route path="/profile/vanity" element={<VanityProfile/>} />
        <Route path="/profile/notification" element={<Notification/>} />
        <Route path="/profile/auto-schedule" element={<AutoSchedule/>} />
        <Route path="/profile/manage-account" element={<ManageAccProfile/>} />
      </Routes>
    </Router>
  );
}