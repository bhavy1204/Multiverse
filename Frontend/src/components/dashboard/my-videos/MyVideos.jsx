import UserCardGrid from "../videos/UserCardGrid";
import {useVideos} from "../VideoProvider";
import { useEffect } from "react";
import api from "@/api/client";

export default function MyVideos() {

    const {videos, updateVideos} = useVideos();

     useEffect(() => {
        const fetchMyVideos = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            const res = await api.get(`/v1/dashboard/getChannelVideo/${user._id}`);
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