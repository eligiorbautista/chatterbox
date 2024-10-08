import Conversation from "../models/conversation.model.mjs";
import Message from "../models/message.model.mjs";
import { getReceiverSocketId, io } from "../socket/socket.mjs"; 

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const recieverSocketId = getReceiverSocketId(receiverId);

    // if reciever is online
    if(recieverSocketId){
      // io.to(<socket_id>).emit() is used to send events to specific client 
      io.to(recieverSocketId).emit('newMessage', newMessage);
    }

    // await conversation.save(); 1 sec
    // await newMessage.save(); 2 sec

    // This will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(`Error in sendMesasge controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

    if(!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    
    res.status(200).json(messages)

  } catch (error) {
    console.log(`Error in getMessages controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};
