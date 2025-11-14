import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css'
})
export class AllCourses {
  cards: any[] = [
    {
      title: 'P.G. Diploma in Agriculture Management',
      text: 'The Post Graduate Diploma in Agriculture Management is a comprehensive program designed to equip graduates with advanced knowledge and practical skills in the field of modern agricultural practices, agribusiness strategies, and sustainable farm management.',
      link: 'diploma-in-agriculture-management',
      duration: '1 Year',
      eligibility: 'Relevent Degree'
    },
    {
      title: 'P.G. Diploma in Horticultural Management',
      text: 'The Post Graduate Diploma in Horticultural Management provides practical skills and advanced knowledge in modern horticulture, nursery and greenhouse operations, floriculture, and sustainable cultivation of fruits, vegetables, and ornamental plants.',
      link: 'diploma-in-horticultural-management',
      duration: '1 Year',
      eligibility: 'Relevent Degree'
    },
    {
      title: 'P.G. Diploma in Plantation Management',
      text: 'The Post Graduate Diploma in Plantation Management equips students with practical skills and advanced knowledge in managing plantation crops like tea, coffee, rubber, and spices. The course emphasizes sustainability, estate operations, processing, and marketing techniques.',
      link: 'diploma-in-plantation-management',
      duration: '1 Year',
      eligibility: 'Relevent Degree'
    },
    {
      title: 'Diploma in Agriculture',
      text: 'The Diploma in Agriculture offers foundational knowledge and hands-on training in crop production, soil science, irrigation, pest management, and sustainable farming methods. It prepares students for entry-level roles in agriculture and agribusiness sectors.',
      link: 'diploma-in-agriculture',
      duration: '1 Year',
      eligibility: '10th Pass'
    },
    {
      title: 'Diploma in Horticultural',
      text: 'The Diploma in Horticulture provides essential training in the cultivation of fruits, vegetables, flowers, and ornamental plants. The program covers nursery techniques, plant protection, and modern horticultural practices for sustainable production and agribusiness.',
      link: 'diploma-in-horticultural',
      duration: '1 Year',
      eligibility: '10th Pass'
    },
    {
      title: 'Diploma in Farm Management',
      text: 'The Diploma in Farm Management focuses on practical and managerial skills for effective farm operations. Students learn about crop planning, resource management, budgeting, soil health, and modern farming techniques to improve productivity and sustainability.',
      link: 'diploma-in-farm-management',
      duration: '1 Year',
      eligibility: '10th Pass'
    },
    {
      title: 'Diploma in Fodder & Feed Management',
      text: 'The Diploma in Fodder & Feed Management offers practical knowledge in cultivating quality fodder crops and formulating balanced livestock feed. The program emphasizes sustainable nutrition strategies for dairy, poultry, and livestock productivity enhancement.',
      link: 'diploma-in-fodder-feed-management',
      duration: '1 Year',
      eligibility: '10th Pass'
    },
    {
      title: 'Diploma in Vegetable Production',
      text: 'The Diploma in Vegetable Production equips students with practical skills in cultivating a wide range of vegetables using modern and sustainable methods. The program covers crop planning, soil and pest management, organic practices, and post-harvest handling.',
      link: 'diploma-in-vegetable-production',
      duration: '1 Year',
      eligibility: '10th Pass'
    },
    {
      title: 'Diploma in Seed Management',
      text: 'The Diploma in Seed Management provides in-depth knowledge of seed production, processing, storage, and certification. The course trains students in quality control, hybrid seed technology, and sustainable practices essential for improving crop yield and farm productivity.',
      link: 'diploma-in-seed-management',
      duration: '1 Year',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Mushroom Production',
      text: 'The Certificate Course in Mushroom Production offers hands-on training in mushroom cultivation techniques, including spawn preparation, environmental control, harvesting, and marketing. It is ideal for aspiring entrepreneurs and farmers seeking income through mushroom farming.',
      link: 'certificate-course-in-mushroom-production',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Organic Farming',
      text: 'The Certificate Course in Organic Farming trains students in eco-friendly agricultural methods using natural inputs. It covers soil health, composting, pest control, and certification processes, empowering learners to adopt sustainable and profitable organic practices.',
      link: 'certificate-course-in-organic-farming',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Bio Fertilizer Production',
      text: 'The Certificate Course in Bio Fertilizer Production provides practical knowledge on cultivating beneficial microbes for soil fertility. Students learn production techniques, quality control, application methods, and the role of biofertilizers in sustainable agriculture.',
      link: 'certificate-course-in-bio-fertilizer-production',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Farm Management',
      text: 'The Certificate Course in Farm Management equips learners with foundational skills in planning, organizing, and managing farm operations. The program covers crop planning, resource utilization, budgeting, and record-keeping for efficient and sustainable farm practices.',
      link: 'certificate-course-in-farm-management',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Horticulture',
      text: 'The Certificate Course in Horticulture provides essential training in the cultivation of fruits, vegetables, flowers, and ornamental plants. It covers nursery techniques, soil management, pest control, and sustainable horticultural practices for small-scale and commercial farming.',
      link: 'certificate-courses-in-horticulture',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Fodder & Feed Management',
      text: 'The Certificate Course in Fodder & Feed Management offers practical training in growing quality fodder crops and preparing balanced feed for livestock. The course focuses on nutrition, preservation, and sustainable feed strategies to enhance animal health and farm productivity.',
      link: 'certificate-courses-in-fodder-feed-management',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Poultry Farming',
      text: 'The Certificate Course in Poultry Farming provides hands-on training in broiler and layer bird management, housing, nutrition, health care, and disease control. It is ideal for beginners and farmers aiming to start or expand sustainable poultry farming ventures.',
      link: 'certificate-courses-in-poultry-farming',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
    {
      title: 'Certificate Course in Dairy Farming',
      text: 'The Certificate Course in Dairy Farming trains students in modern dairy practices, including cattle management, milking techniques, feed planning, breeding, and disease control. It prepares learners to efficiently manage dairy farms and promote milk production as a sustainable livelihood.',
      link: 'certificate-courses-in-dairy-farming',
      duration: '6 Months',
      eligibility: '10th Pass'
    },
  ];
  pgDiplomas = this.cards.filter(c => c.title.startsWith('P.G.'));
  ugDiplomas = this.cards.filter(c => c.title.startsWith('Diploma'));
  certificates = this.cards.filter(c => c.title.startsWith('Certificate'));

  
}
