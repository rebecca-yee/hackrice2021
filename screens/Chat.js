import React, { useState, useCallback, useEffect } from 'react'
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GiftedChat } from "react-native-gifted-chat"

// components

export function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Yes, what time?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Jackie',
        },
      },

      {
        _id: 3,
        text: 'Hi would you be willing to study?',
        createdAt: new Date(),
        user: {
          _id: 4,
          name: 'Rebecca',
        },
      },
      
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (  
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4F1F4",
  },
  statusbar: {
    backgroundColor: "rgb(192, 165, 192)",
    height: 50,
  },
  balance: {
    paddingBottom: 20,
  },
  input: {
    paddingBottom: 20,
    alignItems: "center",
  },
});

export default Chat;
