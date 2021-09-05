import React from 'react'
import ConfirmedQuestions from '../components/confirmedQuestions'
import Navbar from '../components/navbar'
import { ThemeProvider } from '../components/themeProvider'
import Footer from '../components/footer'

function questionBank() {
    return (
        <ThemeProvider>
            <div>
                <Navbar />
                <ConfirmedQuestions />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default questionBank
