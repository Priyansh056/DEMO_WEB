/*document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    // Icons are stored as SVG strings
    const icons = {
        building: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h8"/><path d="M12 4v16"/></svg>`,
        briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
        fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
        trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
        camera: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
        users: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-[#142B6F]"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
        x: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`
    };
    
    // The main data object, similar to the React component's state
    const placementOptions = [
        { id: 'about', title: 'About Placement Cell', icon: icons.building, description: 'Training & Placement Office, SATI Vidisha', content: { heading: 'Training & Placement Cell - SATI Vidisha', sections: [ { title: 'About T&P Office', content: 'The Training & Placement Office, SATI Vidisha facilitates the process of placement of students passing out from the Institute besides collaborating with leading organizations and institutes in setting up of internship and training program of students. The office liaises with various industrial establishments, corporate houses etc. which conduct campus interviews and select graduate and post-graduate students from all disciplines.' }, { title: 'Industry Categories & Recruiters', content: 'Core Engineering Industries, IT & IT Enabled Services, Manufacturing Industries, Consultancy Firms, Finance Companies Management Organization, R & D Laboratories. Nearly 40 companies recruit our students through campus interviews annually.' }, { title: 'Placement Team', content: 'Dr. Ashutosh Datar (Advisor, T&P Cell) - ashutoshdatar.bme@satiengg.in, 9826216560 | Prof. Abhishek Mathur (Placement Officer) - abhishekmathur.cse@satiengg.in, 9827792341 | Dr. Abhishek Jain (Assistant T&P Officer) - abhishekjain.ec@satiengg.in, 9300618580 | Prof. Dolly Panthi (Assistant T&P Officer) - dollypanthi.iot@satiengg.in, 7047616955' }, { title: 'Message from Placement Officer', content: 'At SATI, our mission is to cultivate professionally competent engineers through value-based, quality education. We take pride in our graduates success in the industry, built upon three core pillars: carefully selected students, accomplished faculty who integrate real-world experiences, and cutting-edge infrastructure that mirrors professional settings.' } ] } },
        { id: 'placements', title: 'Placements', icon: icons.briefcase, description: 'Campus placement process and preparation', content: { heading: 'Placement Process & Preparation - SATI Vidisha', sections: [ { title: 'Placement Season Timeline', content: 'The placement season runs through the course of the year, commencing from July to June. Job offers, dates of interviews, selection of candidates etc. are announced through the Training & Placement Office. This ensures year-round opportunities for students.' }, { title: 'Pre-Placement Preparation Program', content: 'Comprehensive preparation including: Mock Test (Reasoning + English + Technical) | Communication Skills Development Classes | Professional Resume Writing Training | Mock Interview Sessions | Pre-Placement Talks conducted as per mutual convenience with recruiting companies.' }, { title: 'Infrastructure & Facilities', content: 'The Training & Placement Office provides complete infra-structural facilities to conduct group discussions, written tests, technical interviews, HR interviews, and handles all logistics for campus recruitment drives.' }, { title: 'Student Committee & Policy Framework', content: 'The Placement Office is assisted by a committee comprising representatives from undergraduate and post-graduate engineering streams. The committee evolves a broad policy framework every year besides a set of inviolable rules for a fair and transparent placement process.' } ] } },
        { id: 'brochure', title: 'Placement Brochure', icon: icons.fileText, description: 'Download placement brochures for different years', content: { heading: 'Placement Brochure Downloads - SATI Vidisha', sections: [ { title: 'Placement Brochure 2025-26', content: 'Latest comprehensive placement brochure containing detailed information about SATI Vidisha academic programs, faculty expertise, student profiles, infrastructure facilities, placement statistics, and recruiting company details. Essential resource for current recruitment cycle.' }, { title: 'Placement Brochure 2024-25', content: 'Previous year comprehensive placement document showcasing student achievements, department-wise placement records, salary packages, company collaborations, and institutional growth metrics. Valuable for trend analysis and comparative studies.' }, { title: 'Placement Brochure 2023-24', content: 'Historical placement brochure containing past placement records, student success stories, alumni achievements, recruiting company feedback, and institutional development progress. Useful for understanding placement trajectory and institutional excellence.' } ] } },
        { id: 'records', title: 'Placement Records', icon: icons.trophy, description: 'Year-wise placement records and achievements', content: { heading: 'Placement Records & Statistics - SATI Vidisha', sections: [ { title: 'Recent Placement Records (2020-2025)', content: '📊 Placement Record 2024-25 | 📊 Placement Record 2023-24 | 📊 Placement Record 2022-23 | 📊 Placement Record 2021-22 | 📊 Placement Record 2020-21. Complete year-wise statistics including company-wise selections, package details, department-wise performance, and placement percentages.' }, { title: 'Historical Placement Data (2015-2020)', content: '📈 Placement 2019-20 | 📈 Placement 2018-19 | 📈 Placement 2017-18 | 📈 Placement 2016-17 | 📈 Placement 2015-16. Decade-long placement history showing consistent growth, institutional development, and improved industry partnerships over the years.' }, { title: 'Special Achievement Programs', content: '🎯 Placement opportunities through AMCAT test 2018-19 - Alternative assessment pathway | 🏆 Congratulations to GATE-2020 Qualifiers - Academic excellence recognition | 🔗 New Alumni Website Link - Connect with successful graduates and their achievements.' }, { title: 'Essential Resources & Documentation', content: '📋 Internship Application Form - Apply for industry internships | 📜 Placement Policy 22-23 - Current guidelines and rules | 📞 Contact placement team for queries and assistance | 💼 Industry partnership opportunities for recruiters.' } ] } },
        { id: 'gallery', title: 'Placement Gallery', icon: icons.camera, description: 'Photos from placement events and ceremonies', content: { heading: 'Placement Gallery - SATI Vidisha', sections: [ { title: 'Annual Placement Ceremonies & Celebrations', content: '📸 Photo gallery showcasing annual placement ceremonies, job offer celebrations, award distribution events, and recognition programs. Memorable moments capturing student achievements, success stories, and milestone celebrations during campus recruitment drives and placement announcements.' }, { title: 'Campus Recruitment Events & Company Visits', content: '🏢 Visual documentation of pre-placement talks, company presentations, recruitment processes, and campus interviews conducted by various organizations. Images capturing interaction between students and industry representatives from Core Engineering, IT, Manufacturing, and other sectors.' }, { title: 'Training Sessions & Workshop Documentation', content: '🎓 Photo collection from pre-placement preparation sessions, mock interviews, communication skill workshops, technical training programs, resume writing sessions, and group discussion practice organized for student development and industry readiness.' }, { title: 'Alumni Success Stories & Industry Connect', content: '⭐ Gallery featuring successful alumni, their achievements in various industries, campus visits for mentoring current students, alumni interaction sessions, and testimonials from graduates working in prestigious organizations across different sectors.' } ] } },
        { id: 'industry-readiness', title: 'Industry Readiness Program', icon: icons.users, description: 'Training programs to prepare students for industry', content: { heading: 'Industry Readiness Program - SATI Vidisha', sections: [ { title: 'Comprehensive Pre-Placement Training', content: '🎯 Complete preparation program including: Mock Tests (Reasoning + English + Technical) | Communication Skills Development Classes | Professional Resume Writing Workshops | Mock Interview Sessions with industry experts | Group Discussion Practice | Personality Development Sessions designed as per industry requirements.' }, { title: 'Technical & Soft Skills Development', content: '💻 Regular skill enhancement workshops covering: Latest technology trends and programming languages | Project management and teamwork skills | Professional communication and presentation skills | Problem-solving and analytical thinking | Leadership development and time management | Industry-specific technical certifications.' }, { title: 'Industry Interaction & Expert Mentorship', content: '🤝 Direct industry engagement through: Pre-placement talks by company representatives | Guest lectures from professionals in Core Engineering, IT, Manufacturing, Consultancy, Finance, and R&D sectors | Mentorship programs with alumni and industry experts | Live project collaborations with recruiting companies | Internship opportunities with partner organizations.' }, { title: 'Assessment & Certification Programs', content: '📝 Professional assessment opportunities including: AMCAT test preparation and placement support | GATE examination guidance and coaching | Professional certification programs | Industry-standard skill assessments | Competitive exam preparation | Alternative placement pathways through standardized tests and online platforms.' } ] } }
    ];

    // --- DOM ELEMENT SELECTION ---
    const dropdownButton = document.getElementById('placement-dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownOverlay = document.getElementById('dropdown-overlay');
    const chevronIcon = document.getElementById('chevron-icon');
    const mainContentOptions = document.getElementById('main-content-options');
    const modalContainer = document.getElementById('modal-container');
    const modalHeader = document.getElementById('modal-header');
    const modalContent = document.getElementById('modal-content');
    const modalCloseButtonBottom = document.getElementById('modal-close-button-bottom');

    // --- FUNCTIONS ---
    const toggleDropdown = () => {
        const isHidden = dropdownMenu.classList.contains('hidden');
        dropdownMenu.classList.toggle('hidden', !isHidden);
        dropdownOverlay.classList.toggle('hidden', !isHidden);
        chevronIcon.classList.toggle('rotate-180', isHidden);
    };

    const closeDropdown = () => {
        dropdownMenu.classList.add('hidden');
        dropdownOverlay.classList.add('hidden');
        chevronIcon.classList.remove('rotate-180');
    };

    const openModal = (pageId) => {
        const pageData = placementOptions.find(opt => opt.id === pageId);
        if (!pageData) return;

        // Populate Modal Header
        modalHeader.innerHTML = `
            <div class="flex justify-between items-center max-w-7xl mx-auto">
                <div class="flex items-center space-x-3">
                    <div class="text-[#FFD601] w-8 h-8">${pageData.icon.replace('width="16"', 'width="32"').replace('height="16"', 'height="32"')}</div>
                    <h1 class="text-3xl font-bold">${pageData.content.heading}</h1>
                </div>
                <button id="modal-close-button-top" class="text-white hover:text-[#FFD601] transition-colors p-2 hover:bg-black hover:bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD601]">
                    ${icons.x}
                </button>
            </div>
        `;

        // Populate Modal Content
        modalContent.innerHTML = pageData.content.sections.map(section => `
            <div class="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#FFD601] hover:shadow-xl transition-shadow">
                <h2 class="text-2xl font-bold text-[#142B6F] mb-4 flex items-center space-x-3">
                    ${icons.externalLink}
                    <span>${section.title}</span>
                </h2>
                <div class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">${section.content}</div>
            </div>
        `).join('');

        // Show the modal
        modalContainer.classList.remove('hidden');

        // Add event listener to the newly created top close button
        document.getElementById('modal-close-button-top').addEventListener('click', closeModal);
    };

    const closeModal = () => {
        modalContainer.classList.add('hidden');
    };

    // --- INITIAL RENDERING ---
    // Render dropdown menu items
    dropdownMenu.innerHTML = placementOptions.map(option => `
        <button data-page-id="${option.id}" class="w-full text-left px-4 py-3 hover:bg-[#E1DEE6] transition-colors flex items-center space-x-3 border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-[#E1DEE6] dropdown-item">
            <div class="text-[#142B6F] flex-shrink-0">${option.icon}</div>
            <div class="flex-grow">
                <div class="text-gray-800 font-medium text-sm">${option.title}</div>
                <div class="text-gray-500 text-xs mt-1 line-clamp-2">${option.description}</div>
            </div>
        </button>
    `).join('');

    // Render main content options
    mainContentOptions.innerHTML = placementOptions.map(option => `
        <div class="space-y-2 p-3 bg-slate-100 rounded-lg">
            <div class="flex items-center space-x-2">
                <div class="text-[#142B6F]">${option.icon}</div>
                <span class="text-sm font-medium text-gray-800">${option.title}</span>
            </div>
            <p class="text-xs text-gray-600">${option.description}</p>
        </div>
    `).join('');

    // --- EVENT LISTENERS ---
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up to the document
        toggleDropdown();
    });
    
    dropdownOverlay.addEventListener('click', closeDropdown);
    
    modalCloseButtonBottom.addEventListener('click', closeModal);

    // Add event listeners to all dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page-id');
            openModal(pageId);
            closeDropdown();
        });
    });

});*/
