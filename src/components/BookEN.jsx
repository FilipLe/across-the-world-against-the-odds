import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import pages from './data/bookEN.jsx';

function BookEN() {
    return (
    <div className = "container">
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
                <div>
                    For Dr. Nguyễn Thị Thoa
                </div>
                <br/>
                <img 
                    src = "https://i.postimg.cc/sfQLYk3f/074-AE30-D-49-EF-422-E-B776-F8-F81-A764476-1-105-c.jpg"
                    alt="Cover Photo" 
                    className="page-logo"
                />
                <br/>
                <div className = "title">
                    Across the World, Against the Odds
                </div>
                <div className = "author">
                    - Nguyen Le
                </div>
                <br/>
                <div className = "sign">
                    May 16, 2025
                    <br/>
                </div>
                <div>
                    Boston, MA
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