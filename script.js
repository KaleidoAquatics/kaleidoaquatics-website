
/* KALEIDO AQUATICS - WEBSITE STYLES */

* {
    box- sizing: border - box;
margin: 0;
padding: 0;
}

body {
    font - family: Arial, Helvetica, sans - serif;
    background: #eef5f8;
    color: #17334b;
    line - height: 1.6;
}

.container {
    width: 90 %;
    max - width: 1050px;
    margin: 0 auto;
}

/* HEADER */

.site - header {
    background: linear - gradient(135deg, #031b35, #07517a);
    color: white;
    text - align: center;
    padding: 38px 15px 32px;
    border - bottom: 6px solid #19bce3;
}

.site - header h1 {
    font - size: clamp(2rem, 6vw, 3.6rem);
    font - weight: 800;
    letter - spacing: 2px;
}

.site - header h1 span {
    color: #20c4ed;
}

.tagline {
    color: #a7eaff;
    font - size: 1rem;
    letter - spacing: 4px;
    font - weight: bold;
}

/* WELCOME SECTION */

.welcome {
    text - align: center;
    padding: 55px 20px 40px;
}

.welcome h2 {
    color: #063b60;
    font - size: clamp(1.7rem, 4vw, 2.4rem);
    margin - bottom: 12px;
}

.welcome p {
    font - size: 1.1rem;
}

.location {
    margin - top: 15px;
    color: #078ebc;
    font - weight: bold;
    letter - spacing: 2px;
    font - size: 0.9rem!important;
}

/* USER GUIDE PANEL */

.guide {
    display: flex;
    align - items: center;
    gap: 25px;
    background: white;
    border - radius: 14px;
    padding: 32px;
    margin: 15px auto 55px;
    border - left: 6px solid #20bce4;
    box - shadow: 0 5px 20px rgba(0, 40, 70, 0.10);
}

.guide - icon {
    font - size: 3.5rem;
}

.guide h2 {
    color: #06436b;
    font - size: 1.6rem;
    margin - bottom: 8px;
}

.guide p {
    margin - bottom: 20px;
}

.guide - link {
    display: inline - block;
    background: #087fb5;
    color: white;
    text - decoration: none;
    font - weight: bold;
    padding: 12px 24px;
    border - radius: 6px;
    letter - spacing: 1px;
    transition: background 0.2s ease;
}

.guide - link:hover {
    background: #04547c;
}

/* FOOTER */

footer {
    text - align: center;
    background: #031b35;
    color: #c7e9f5;
    padding: 25px 15px;
    font - size: 0.85rem;
    letter - spacing: 1px;
    border - top: 4px solid #20bce4;
}

/* MOBILE DISPLAY */

@media(max - width: 600px) {
  .guide {
        flex - direction: column;
        text - align: center;
        padding: 25px 20px;
    }

  .tagline {
        letter - spacing: 2px;
    }
}
