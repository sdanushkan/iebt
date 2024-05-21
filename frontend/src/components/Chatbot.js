import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'inter',
        headerBgColor: '#DA0C0C',
        headerFontColor: '#fff',
        headerFontSize: '16px',
        botBubbleColor: '#DA0C0C',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',

        
      };
  return (
    <div className='fixed bottom-0 right-0 z-50 '>
        <ThemeProvider theme={theme}>
            <ChatBot
            className="font-medium"
            headerTitle="Global Visa Connect"
            steps={[
                {
                  id: '1',
                  message: 'What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you!',
                  end: true,
                },
              ]}
            floating={true}
            />
        </ThemeProvider>
    </div>
  )
}

export default Chatbot