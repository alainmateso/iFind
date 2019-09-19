import database from '../models';

class PostService {
    static async updatePost (id, updatePost){
        try {
            const postToUpdate = await database.posts.findOne({
                where: { id: Number(id)}
        });
        if (postToUpdate) {
            await database.posts.update(updatePost, { where: { id: Number(id) } });
            return updatePost;
        }
        return null;
        } catch (error) {
            throw error;
        }
    }
}
export default PostService;