const API_BASE = "http://localhost:3030/api/v1/posts";

export const createComment = async (post_id, data) => {
    try {
        const res = await fetch(`${API_BASE}/${post_id}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (error) {
        console.error("Failed to create comment:", error);
    }
};

export const updateComment = async ( post_id, id, data) => {
    try {
        const res = await fetch(`${API_BASE}/${post_id}/comments/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (error) {
        console.error("Failed to update comment:", error);
    }
};

export const deleteComment = async (post_id, id) => {
    try {
        const res = await fetch(`${API_BASE}/${post_id}/comments/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        return await res.json();
    } catch (error) {
        console.error("Failed to delete comment:", error);
    }
};

export const getCommentsByPostId = async (post_id) => {
    try {
        const res = await fetch(`${API_BASE}/${post_id}/comments`);
        return await res.json();
    } catch (error) {
        console.error("Failed to fetch comments:", error);
    }
};

