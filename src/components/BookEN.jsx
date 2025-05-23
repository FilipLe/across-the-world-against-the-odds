import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";

function BookEN() {
    const pages = [
        {
            page:"1",
            header:true,
            headerContent:"Table of Content",
            content:"Note to Reader………………………………………2\
                    Chapter 1: Early Days………………………………3  \
                    Chapter 2: Journey from Thanh Hoá to Kraków.…3\
                    Chapter 3: Undergrad in Kraków………………..…9\
                    Chapter 4: Return to Vietnam……….………….…11\
                    Chapter 5: PhD, Motherhood, and Legacy………13\
                    Epilogue…………………………………………..…16\
                    "
        },
        {
            page:"2",
            header:true,
            headerContent:"Note to Readers",
            content:"\tI am Nguyễn Thị Thoa’s grandson. I have written this as a birthday gift for my amazing grandmother—and as a legacy for our family. If it were not for her, our lives would not be what they are today. I wanted to write this book to ensure that her story, her sacrifices, and her strength are never forgotten. It is not every day that a woman walks through fire and walks out carrying her children—and her future—on her back. It would be a waste to let her story go untold. \
                    \n\n\tThis book is written from stories passed down, memories shared, and truths felt. Some details may have blurred with time, but the heart of it—her strength—remains sharp and clear.\
                    \n\n\tTo my babcia, my mama, and the rest of my family: \
                    \nThank you. Thank you for the strength, the wisdom, the love, and the sacrifices that built the life I am privileged to live today. This book is for you. This legacy is yours.\
                    "
        },
        {
            page:"3",
            header: true,
            headerContent:"Chapter 1: Early Days",
            content:"\tOn 1/6/1949, in the rural province of Thanh Hoá, Vietnam was born my grandmother, Nguyễn Thị Thoa—or at least, that was the date many years later recorded on her birth certificate, hastily created when she needed one to begin elementary school. In truth, her mother, like many others in the village at the time, was illiterate and could not read a calendar—only recalling that her daughter was born in the year of the Buffalo. Life was not romantic—it was survival dressed in the thinnest linen. She was the youngest of the nine children, born into a childhood shaped by war, scarcity, and the enduring strength of a close-knit community.\n\
                    \n\tThe Vietnam War broke out in the mid-1950s, a brutal conflict between the communist North and the US-backed anti-communist South. Thanh Hoá, located just in the center of Vietnam, became a strategically important region — the one connecting the two regions and ultimately enabling a supply route and a military stronghold for the Viet Congs fighting in South Vietnam. Hence, due to having key infrastructure like the Hàm Rồng Bridge, the province endured repeated bombings \
                    "
        },
        {
            page:"4",
            header: false,
            headerContent:"",
            content:"by American B-52 bomber planes relentlessly. \
                    \n\n\tIn those years, the war crept into every corner of my grandmother’s life — including her fight to learn. Her path to education was never guaranteed. At the time, Vietnam faced a serious illiteracy crisis, and worse yet, my grandmother carried a political stain: she was considered “con cháu địa chủ”—descendant of a landowning family. That label marked her for discrimination under the new communist state. Schools turned away children like her. But her older sister, who had finished tenth grade and could read, began teaching my grandmother at home, using whatever scraps of material that she had remaining. Then one day, a brave local official—whose name my grandmother still remembers with reverence—challenged the policy and declared that every child deserves to learn, that she was finally allowed to attend school. But even then, my grandmother’s education did not unfold in a classroom. It took place in a bunker beneath the ground that she and her classmates had dug with their own hands.  \
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
                    // figure out image hosting
                    src="https://drive.google.com/thumbnail?id=1MwQlbDza_bUJmRY4P0T0OUMR2Wn0JwoX"
                    alt="Cover Photo" 
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
                            {page.header ? (
                                <h2 className="page-header">{page.headerContent}</h2>
                            ) : (
                                <div className="page-header-placeholder"></div>
                            )}
                            {/* <h2 className="page-header">{page.headerContent}</h2> */}
                            <p className="page-description">{page.content}</p>
                        </div>
                    </div>
                    <p className="page-number">{page.page}</p>
                </div>
            </div>
        ))}
        </HTMLFlipBook>
    </div>
  );
}

export default BookEN