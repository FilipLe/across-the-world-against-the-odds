import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";

function BookEN() {
    const pages = [
        {
            page:"1",
            // imgURL:"",
            // header:true,
            headerContent:"Table of Content",
            content:"Note to Reader………………………………………2\
                    Chapter 1: Early Days………………………………3 \
                    Chapter 2: Journey from Thanh Hoá to Kraków.…3\
                    Chapter 3: Undergrad in Kraków………………..…9\
                    Chapter 4: Return to Vietnam……….………….…11\
                    Chapter 5: PhD, Motherhood, and Legacy………13\
                    Epilogue…………………………………………..…16\
                    "
        },
        {
            page:"2",
            // imgURL:"",
            // header:true,
            headerContent:"Note to Readers",
            content:"I am Nguyễn Thị Thoa’s grandson. I have written this as a birthday gift for my amazing grandmother—and as a legacy for our family. If it were not for her, our lives would not be what they are today. I wanted to write this book to ensure that her story, her sacrifices, and her strength are never forgotten. It is not every day that a woman walks through fire and walks out carrying her children—and her future—on her back. It would be a waste to let her story go untold. \
                    This book is written from stories passed down, memories shared, and truths felt. Some details may have blurred with time, but the heart of it—her strength—remains sharp and clear.\
                    To my grandmother, my mother, and to the rest of my family:\
                    Thank you. Thank you for the strength, the wisdom, the love, and the sacrifices that built the life I am privileged to live today. This book is for you. This legacy is yours.\
                    "
        }
    ]

    return (
    <div>
        <div className="title">
            <h1>Across the World, Against the Odds</h1>
        </div>
        <HTMLFlipBook 
        width={370} 
        height={500}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size='fixed'
        >
        <div className="page" style={{ background: 'transparent' }}>
            <div className="page-content cover">
                <img 
                    src="src/assets/cover.jpeg"
                    alt="Logo" 
                    className="page-logo"
                />
                <div className = "title">
                    Across the World, Against the Odds
                </div>
                <div>
                    - Nguyen Le
                </div>
            </div>
        </div>

        {pages.map((page) => (
            <div className="page" key={page.page}>
                <div className="page-content">
                    <div className="page-container">
                        <div className="page-info">
                            <h2 className="page-name">{page.headerContent}</h2>
                            <p className="page-description">{page.content}</p>
                            <p className="page-number">#{page.page}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </HTMLFlipBook>
    </div>
  );
}

export default BookEN