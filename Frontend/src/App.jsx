import { Route, Routes, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import { fetchUser } from '@/store/slices/authSlice'

import PageNotFound from '@/components/common/PageNotFound'
import ComingSoon from '@/components/common/ComingSoon'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import HomePage from '@/components/layout/HomePage'
import CardGrid from '@/components/public/videos/CardGrid'
import TweetsGrid from '@/components/public/tweets/TweetsGrid'
import SearchResults from '@/components/public/SearchResults'
import VideoPlaying from '@/components/public/VideoPlaying'
import Dashboard from '@/components/dashboard/Dashboard'
import { UserChannel } from '@/components/dashboard/UserChannel'
import History from '@/components/dashboard/history/History'
import MyVideos from '@/components/dashboard/my-videos/MyVideos'
import UploadVideos from '@/components/dashboard/upload/UploadVideos'
import MyPosts from '@/components/dashboard/posts/MyPosts'
import SubscribeTo from '@/components/dashboard/subscriptions/SubscribeTo'
import MyLikedVideo from '@/components/dashboard/liked/videos/MyLikedVideo'
import MyLikedPost from '@/components/dashboard/liked/posts/MyLikedPost'
import Playlist from '@/components/dashboard/playlist/Playlist'
import PlaylistVideoContainer from '@/components/dashboard/playlist/PlaylistVideoContainer'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  console.log("THIS IS USER >> ", user)
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  const dispatch = useDispatch()

  // Fetch user on app load, but ignore failure (guest mode)
  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .catch(() => {
        // Guest mode, no action needed
      })
  }, [dispatch])

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>

        {/* Catch-all for 404 */}
        <Route path='*' element={<PageNotFound />} />

        {/* Auth routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        {/* Public routes with navbar */}
        <Route element={<HomePage />} >
          <Route path='/' element={<CardGrid />} />
          <Route path='/home/videos' element={<CardGrid />} />
          <Route path='/home/tweets' element={<TweetsGrid />} />
          <Route path='/home/search' element={<SearchResults />} />
        </Route>

        {/* Dashboard and protected routes */}
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route path='user' element={<UserChannel />} />
          <Route path='history' element={<History />} />
          <Route path='myVideos' element={<MyVideos />} />
          <Route path='upload' element={<UploadVideos />} />
          <Route path='myPosts' element={<MyPosts />} />
          <Route path='mySubscription' element={<SubscribeTo />} />
          <Route path='myLikedVideos' element={<MyLikedVideo />} />
          <Route path='myLikedPosts' element={<MyLikedPost />} />
          <Route path='myPlaylist' element={<Playlist />} />
          <Route path='myPlaylist/playlist/:playlistId' element={<PlaylistVideoContainer />} />
        </Route>

        {/* Video playing route (public) */}
        <Route path='/video/:videoId' element={<VideoPlaying />} />
        <Route path='/under-devlopment' element={<ComingSoon />} />

      </Routes>
    </>
  )
}

export default App
