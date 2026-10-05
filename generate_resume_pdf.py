import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def generate_pdf(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # 0.5 inch (36 pt) margins for exact single page fit
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=28,
        bottomMargin=28
    )
    
    story = []
    
    # Palette matching the resume
    BAR_BG = colors.HexColor('#D9E1E8')      # Section header bar background
    TEXT_DARK = colors.HexColor('#111827')   # Main dark text
    MUTED_TEXT = colors.HexColor('#374151')  # Secondary text
    LINE_COLOR = colors.HexColor('#CBD5E1')  # Dividers
    
    styles = getSampleStyleSheet()
    
    # Header Styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=TA_CENTER,
        textColor=TEXT_DARK
    )
    
    sub_title_style = ParagraphStyle(
        'ResumeSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=TEXT_DARK
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=MUTED_TEXT
    )
    
    section_bar_title = ParagraphStyle(
        'SectionBarTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10,
        alignment=TA_LEFT,
        textColor=TEXT_DARK
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        alignment=TA_LEFT,
        textColor=TEXT_DARK
    )
    
    body_bold = ParagraphStyle(
        'ResumeBodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=TEXT_DARK
    )
    
    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.75,
        leading=10,
        alignment=TA_LEFT,
        leftIndent=11,
        firstLineIndent=-11,
        textColor=TEXT_DARK
    )
    
    def make_section_bar(title):
        t = Table(
            [[Paragraph(f"<b>{title}</b>", section_bar_title)]],
            colWidths=[540],
            rowHeights=[14]
        )
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), BAR_BG),
            ('TOPPADDING', (0,0), (-1,-1), 1.5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ]))
        return t

    # HEADER
    story.append(Paragraph("MEET KOTADIYA", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("IOS DEVELOPER", sub_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Ahmedabad, Gujarat &nbsp;|&nbsp; +91 70692-23256 &nbsp;|&nbsp; kotadiyameet38@gmail.com", contact_style))
    story.append(Spacer(1, 5))
    
    # 1. SUMMARY
    story.append(make_section_bar("SUMMARY"))
    story.append(Spacer(1, 3))
    summary_text = (
        "iOS Developer with 2 years of hands-on experience building and maintaining production-ready native apps in "
        "Swift, UIKit and SwiftUI. Strong in REST API integration, clean and responsive UI, offline-first data handling, and "
        "real-world e-commerce, POS and payment workflows. Comfortable across the full iOS cycle, from UI implementation and "
        "API integration to debugging and performance tuning."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))
    
    # 2. TECHNICAL SKILLS
    story.append(make_section_bar("TECHNICAL SKILLS"))
    story.append(Spacer(1, 3))
    
    skills_data = [
        [
            Paragraph("<b>Language:</b> Swift", body_style),
            Paragraph("<b>Tools:</b> Xcode, Git, GitHub, CocoaPods, SPM", body_style)
        ],
        [
            Paragraph("<b>iOS Frameworks:</b> UIKit, SwiftUI, Auto Layout", body_style),
            Paragraph("<b>Additional:</b> Python, HTML, CSS, JavaScript", body_style)
        ],
        [
            Paragraph("<b>Networking:</b> REST APIs, JSON, Alamofire", body_style),
            Paragraph("<b>Data / Offline:</b> SQLite, FMDatabase, Local Caching, Sync", body_style)
        ],
        [
            Paragraph("<b>Libraries / SDKs:</b> Firebase, SkeletonView, SDWebImage, Kingfisher, Google Maps/Places, IQKeyboardManager", body_style),
            Paragraph("<b>Specialized:</b> NFC/HID Scanner, OTP, POS, Payment Flows", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[275, 265])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 4))
    
    # 3. KEY HIGHLIGHTS
    story.append(make_section_bar("KEY HIGHLIGHTS"))
    story.append(Spacer(1, 3))
    
    highlights_data = [
        [
            Paragraph("<b>E-commerce & Payments</b>", body_style),
            Paragraph("<b>POS & Hardware</b>", body_style),
            Paragraph("<b>Offline-First</b>", body_style),
            Paragraph("<b>Native iOS</b>", body_style),
        ],
        [
            Paragraph("Cart, checkout, coupons, gift wrap, tips and payment flows", body_style),
            Paragraph("NFC/HID card scanning, customer credit checks, OTP verification", body_style),
            Paragraph("SQLite/FMDatabase caching with background sync", body_style),
            Paragraph("Swift, UIKit, SwiftUI with reusable, responsive UI", body_style),
        ]
    ]
    hl_table = Table(highlights_data, colWidths=[135, 140, 135, 130])
    hl_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(hl_table)
    story.append(Spacer(1, 4))
    
    # 4. WORK EXPERIENCE
    story.append(make_section_bar("WORK EXPERIENCE"))
    story.append(Spacer(1, 3))
    
    # Job 1
    job1_header = [
        [
            Paragraph("<b>iOS Developer, Codlens Innovation LLP</b> (Surat, Gujarat)", body_style),
            Paragraph("<b>18 Aug 2025 – 25 Aug 2026</b>", ParagraphStyle('JobDate1', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_job1 = Table(job1_header, colWidths=[380, 160])
    t_job1.setStyle(TableStyle([
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_job1)
    
    job1_bullets = [
        "• Developed and maintained production iOS applications using Swift, UIKit, SwiftUI and Xcode.",
        "• Built reusable UI components, collection views, forms, custom interactions and responsive layouts.",
        "• Integrated REST APIs, parsed JSON responses, handled validation and resolved API/data-type issues.",
        "• Worked with Alamofire, Firebase, SkeletonView, SDWebImage/Kingfisher and other iOS SDKs.",
        "• Implemented e-commerce features including cart, checkout, coupons, gift wrap, tips and payment flows.",
        "• Developed POS features including NFC/HID card scanning, customer credit checks and OTP verification.",
        "• Implemented offline mode with SQLite/FMDatabase, local caching and data synchronization.",
        "• Investigated and fixed UI, networking, navigation, parsing and performance issues with the team."
    ]
    for b in job1_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 3))
    
    # Job 2
    job2_header = [
        [
            Paragraph("<b>iOS Developer, Stricker Apps</b>", body_style),
            Paragraph("<b>2024</b>", ParagraphStyle('JobDate2', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_job2 = Table(job2_header, colWidths=[380, 160])
    t_job2.setStyle(TableStyle([
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_job2)
    
    job2_bullets = [
        "• Developed iOS application features using Swift, UIKit, SwiftUI and Xcode.",
        "• Worked on UI implementation, application logic, API integration, debugging and feature enhancements.",
        "• Used Git/GitHub and followed standard iOS development and version-control workflows."
    ]
    for b in job2_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 4))
    
    # 5. EDUCATION
    story.append(make_section_bar("EDUCATION"))
    story.append(Spacer(1, 3))
    
    edu_data = [
        [
            Paragraph("<b>B.Sc. Information Technology</b><br/><font color='#4B5563'>Atmiya University</font>", body_style),
            Paragraph("<b>2024</b>", ParagraphStyle('EduDate1', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>HSC (Higher Secondary)</b><br/><font color='#4B5563'>Shree Swaminarayan Gurukul, Rajkot</font>", body_style),
            Paragraph("<b>2019–2021</b>", ParagraphStyle('EduDate2', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>SSC (Secondary School)</b><br/><font color='#4B5563'>Shree Swaminarayan Gurukul, Rajkot</font>", body_style),
            Paragraph("<b>2018–2019</b>", ParagraphStyle('EduDate3', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_edu = Table(edu_data, colWidths=[420, 120])
    t_edu.setStyle(TableStyle([
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 3))
    
    # 6. CERTIFICATION
    story.append(make_section_bar("CERTIFICATION"))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Python Basics & Advanced</b> — Bascom Computer &nbsp;•&nbsp; Aug 2024", body_style))
    story.append(Spacer(1, 4))
    
    # 7. CORE STRENGTHS
    story.append(make_section_bar("CORE STRENGTHS"))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Problem Solving &nbsp;•&nbsp; Debugging &nbsp;•&nbsp; Team Collaboration &nbsp;•&nbsp; Communication &nbsp;•&nbsp; Quick Learning", body_style))
    story.append(Spacer(1, 4))
    
    # 8. LANGUAGES
    story.append(make_section_bar("LANGUAGES"))
    story.append(Spacer(1, 3))
    story.append(Paragraph("English &nbsp;•&nbsp; Gujarati &nbsp;•&nbsp; Hindi", body_style))
    
    doc.build(story)
    print(f"Successfully generated PDF at {output_path}")

if __name__ == '__main__':
    target = os.path.abspath("public/assets/resume.pdf")
    generate_pdf(target)
