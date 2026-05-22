import UserCardGrid from "../videos/UserCardGrid";
import {useVideos} from "../VideoProvider";
import { useEffect } from "react";
import { getChannelVideos } from "@/api/dashboard.api";

export default function MyVideos() {

    const {videos, updateVideos} = useVideos();

     useEffect(() => {
        const fetchMyVideos = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            const res = await getChannelVideos(user._id);
            console.log(res.data);
            updateVideos("myVideos", res.data.data);
        };
        fetchMyVideos();
    }, []);

    return (
        <>
            <UserCardGrid type="myVideos"/>
        </>
    )
}