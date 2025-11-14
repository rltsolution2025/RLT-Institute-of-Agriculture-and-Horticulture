import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { AllCourses } from './component/all-courses/all-courses';
import { AgricultureManagement } from './diploma-courses/agriculture-management/agriculture-management';
import { HorticulturalManagement } from './diploma-courses/horticultural-management/horticultural-management';
import { PlantationManagement } from './diploma-courses/plantation-management/plantation-management';
import { Agriculture } from './diploma-courses/agriculture/agriculture';
import { Horticulture } from './diploma-courses/horticulture/horticulture';
import { FarmManagement } from './diploma-courses/farm-management/farm-management';
import { FodderFeedManagement } from './diploma-courses/fodder-feed-management/fodder-feed-management';
import { VegetableProduction } from './diploma-courses/vegetable-production/vegetable-production';
import { SeedManagement } from './diploma-courses/seed-management/seed-management';
import { MushroomProduction } from './certificate-courses/mushroom-production/mushroom-production';
import { OrganicFarming } from './certificate-courses/organic-farming/organic-farming';
import { BioFertilizerProduction } from './certificate-courses/bio-fertilizer-production/bio-fertilizer-production';
import { FarmManagement2 } from './certificate-courses/farm-management-2/farm-management-2';
import { FodderFeedManagement2 } from './certificate-courses/fodder-feed-management-2/fodder-feed-management-2';
import { Horticulture2 } from './certificate-courses/horticulture-2/horticulture-2';
import { PoultryFarming } from './certificate-courses/poultry-farming/poultry-farming';
import { DairyFarming } from './certificate-courses/dairy-farming/dairy-farming';
import { MobileHeader } from './component/mobile-header/mobile-header';


export const routes: Routes = [
    {path:'home',component:Home},
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'header',component:Header},
    {path:'footer', component:Footer},
    {path:'about', component:About},
    {path:'thank-you',component:Contact},
    {path:'our-courses', component:AllCourses},
    {path:'mobile-header',component:MobileHeader},


              /*-- Diploma Courses --*/

    {path:'diploma-in-agriculture-management', component:AgricultureManagement},
    {path:'diploma-in-horticultural-management', component:HorticulturalManagement},
    {path:'diploma-in-plantation-management', component:PlantationManagement},
    {path:'diploma-in-agriculture',component:Agriculture},
    {path:'diploma-in-horticultural',component:Horticulture},
    {path:'diploma-in-farm-management',component:FarmManagement},
    {path:'diploma-in-fodder-feed-management',component:FodderFeedManagement},
    {path:'diploma-in-vegetable-production', component:VegetableProduction},
    {path:'diploma-in-seed-management', component:SeedManagement},

              /*-- Certificate Courses --*/

    {path:'certificate-course-in-mushroom-production', component:MushroomProduction},
    {path:'certificate-course-in-organic-farming', component:OrganicFarming},
    {path:'certificate-course-in-bio-fertilizer-production', component:BioFertilizerProduction},
    {path:'certificate-course-in-farm-management', component:FarmManagement2},
    {path:'certificate-courses-in-fodder-feed-management', component:FodderFeedManagement2},
    {path:'certificate-courses-in-horticulture', component:Horticulture2},
    {path:'certificate-courses-in-poultry-farming', component:PoultryFarming},
    {path:'certificate-courses-in-dairy-farming', component:DairyFarming}
    
];
