import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private contactService: Api
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9]\\d{9}$') // Indian 10-digit mobile number starting with 6–9
        ]
      ],
      courseCategory: ['', Validators.required], // NEW
      course: ['', Validators.required],
    });

    this.filteredCourses = []; // Initialize with empty list
  }
  navigateTo(): void {
    this.router.navigate(['/our-courses'])
  }
  ngAfterViewInit(): void {
    const video = document.querySelector('.bg-video') as HTMLVideoElement;
    if (video) {
      video.playbackRate = 1.5;
    }
  }
  contactForm: FormGroup;
  filteredCourses: string[] = []; // NEW

  pgDiplomaCourses = [
    'P.G. Diploma in Agriculture Management',
    'P.G. Diploma in Horticultural Management',
    'P.G. Diploma in Plantation Management'
  ];

  ugDiplomaCourses = [
    'Diploma in Agriculture',
    'Diploma in Horticultural',
    'Diploma in Farm Management',
    'Diploma in Fodder & Feed Management',
    'Diploma in Vegetable Production',
    'Diploma in Seed Management'
  ];

  certificateCourses = [
    'Certificate Course in Mushroom Production',
    'Certificate Course in Organic Farming',
    'Certificate Course in Bio Fertilizer Production',
    'Certificate Course in Farm Management',
    'Certificate Course in Horticulture',
    'Certificate Course in Fodder & Feed Management',
    'Certificate Course in Poultry Farming',
    'Certificate Course in Dairy Farming'
  ];
  onCategoryChange(): void {
    const selectedCategory = this.contactForm.get('courseCategory')?.value;

    switch (selectedCategory) {
      case 'pg':
        this.filteredCourses = this.pgDiplomaCourses;
        break;
      case 'ug':
        this.filteredCourses = this.ugDiplomaCourses;
        break;
      case 'certificate':
        this.filteredCourses = this.certificateCourses;
        break;
      default:
        this.filteredCourses = [];
        break;
    }

    // Reset the selected course when category changes
    this.contactForm.get('course')?.setValue('');
  }



  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValues = this.contactForm.value;
    const userName = formValues.name || 'user';

    this.contactService.submitContact(formValues).subscribe({
      next: (res) => {
        console.log('✅ Form submitted:', res);
        this.contactForm.reset();
        this.filteredCourses = [];
        this.router.navigate(['/thank-you'], { queryParams: { name: userName } })
      },
      error: (err)=>{
        console.log('❌ Submit error:', err);
        alert('Failed to submit form. Please try again later.');
      }
    });
  }


  cards = [
    {
      id: 'carousel1',
      img1: 'Modern Agricultural Labs - 1.png',
      img2: 'Modern Agricultural Labs - 2.png',
      title: 'Modern Agricultural Labs',
      text: 'We offer well-equipped labs and field setups for students to gain hands-on experience in modern agriculture, horticulture techniques, and soil & plant analysis.'
    },
    {
      id: 'carousel2',
      img1: 'Industry-Integrated Internship-1.png',
      img2: 'Industry-Integrated Internship -2.png',
      title: 'Industry-Integrated Internship',
      text: 'Our programs include real-time field internships and exposure visits to farms, nurseries, agri-businesses, and government research stations, preparing students for the real-world agri sector.'
    },
    {
      id: 'carousel3',
      img1: 'University Affiliation - 1.png',
      img2: 'University Affiliation - 2.png',
      title: 'University Affiliation',
      text: 'We are affiliated with a reputed university in Agriculture and Horticulture education, ensuring our students receive quality academic credentials recognized nationwide.'
    },
    {
      id: 'carousel4',
      img1: 'Placement Suport - 1.png',
      img2: 'Placement Support - 2.png',
      title: 'Placement Support',
      text: 'We provide placement assistance through tie-ups with agribusiness companies, agri-tech startups, organic farms, horticulture nurseries, and government schemes.'
    },
    {
      id: 'carousel5',
      img1: 'Field-Based Practical Learning - 1.png',
      img2: 'Field-Based Practical Learning - 2.png',
      title: 'Field-Based Practical Learning',
      text: 'We prioritize hands-on learning through regular field visits to farms, nurseries, and agri-tech centers. These real-world experiences help students connect theory with practice, understand modern cultivation techniques, and gain insights into rural and sustainable farming methods.'
    },
    {
      id: 'carousel6',
      img1: 'Expert Faculity - 1.png',
      img2: 'Expert Faculity - 2.png',
      title: 'Expert Faculty',
      text: 'Our experienced faculty includes agriculture scientists, horticulture experts, and field specialists who deliver practical and industry-oriented learning.'
    }
  ];
  recruiters = [
    { logo: 'our-recruiters/Bunge India Pvt Ltd.png' },
    { logo: 'our-recruiters/Dailygurus.png' },
    { logo: 'our-recruiters/Jain Irrigation Systems Ltd.png' },
    { logo: 'our-recruiters/myHarvest Farms.png' },
    { logo: 'our-recruiters/Tamil Nadu Horticulture Development Agency (TANHODA).png' },
    { logo: 'our-recruiters/Tamil Nadu State Agricultural Marketing Board (TNSAMB).png' }
  ];

  groupedRecruiters: any[][] = [];
  ngOnInit(): void {
    this.groupRecruiters(3); // 3 recruiters per slide
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  groupRecruiters(size: number) {
    for (let i = 0; i < this.recruiters.length; i += size) {
      this.groupedRecruiters.push(this.recruiters.slice(i, i + size));
    }
  }
}
