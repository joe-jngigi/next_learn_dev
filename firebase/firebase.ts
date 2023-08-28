import {collection } from '../firebase'
let notificationsCollection = collection(database, 'notification')

interface FirebaseProps {
    userId: String,
    recipientUserId: String,
    threadData: String,
    threadID: String,
    liked: boolean
}

export const likeThread = ({userId, recipientUserId, threadData, threadID, liked}: FirebaseProps) =>{

}