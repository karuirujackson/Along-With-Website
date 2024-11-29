import Image from "next/image";
import BrandPen from '../assets/Brand-Pen.svg'
import BrandPhone from '../assets/Brand-Phone.svg';
import BrandSet from '../assets/Brand-Set.svg';
import DotPattern from '../assets/Dot Pattern.svg';
import IngredientsRecipe from '../assets/Ingredients and recipe.svg';
import BrandBox from '../assets/Brand Box.svg';
import BrandLedger from '../assets/Brand-Ledger.svg';
import MockUp from '../assets/Mockup.svg';

export default function Feature() {
  return (
    <div className="h-screen py-16">
      <div className="flex flex-col gap-12 px-4">
        <section className="flex flex-col md:text-center items-center justify-center gap-4">
          <h2 className="text-[#111827] text-3xl md:text-4xl md:leading-10 leading-8 tracking-tight font-extrabold">Engage with your audience</h2>
          <p className="text-xl leading-7 font-normal md:w-2/3 text-[#6B7280]">With Along With, you can invite your community to join you in real-time, cooking along with you and sharing the joy of culinary creation.</p>
        </section>
        <section className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col md:gap-6 gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#111827] text-2xl md:text-3xl md:leading-9 leading-8 font-extrabold tracking-tight">Personalised & Dynamic Recipes</h2>
              <p className="text-lg leading-7 font-normal text-[#6B7280]">Build your recipes in your own style to allow your fans to follow along with your videos and create good meals together. We provide a dynamic ingredients list that caters to how many portions thy intend to cook.</p>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <Image src={BrandPen} alt="Brand-icon-pen" className="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111827] text-lg leading-6 font-medium">Recipes in your Style</h3>
                <p className="text-[#6B7280] text-base leading-6 font-normal">Crafting delicious recipes is an art that requires both creativity and audience appeal. Create recipes that resonates with your audience while retaining creative control.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <Image src={BrandSet} alt="Brand-icon-pen" className="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111827] text-lg leading-6 font-medium">Dynamic Ingredients List</h3>
                <p className="text-[#6B7280] text-base leading-6 font-normal">We provide an adjustable ingredients list that scales based on the number of portions needed for your audience.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <Image src={BrandPhone} alt="Brand-icon-pen" className="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111827] text-lg leading-6 font-medium">Mobile Friendly Design</h3>
                <p className="text-[#6B7280] text-base leading-6 font-normal">We optimise your recipe pages for mobile, ensuring a seamless experience for your audience on both small and large screens.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full">
            <div className="absolute md:top-10 left-20 ">
              <Image src={DotPattern} alt="Dot-Pattern" />
            </div>
            <Image src={IngredientsRecipe} alt="Ingredient-Recipe" className="absolute md:top-10 left-11" />
          </div>
        </section>
        <section className="flex flex-col md:flex-row-reverse md:gap-8 gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#111827] text-2xl md:text-3xl md:leading-9 leading-8 font-extrabold tracking-tight">One-of-a-kind Shopping Experience</h2>
              <p className="text-lg leading-7 font-normal text-[#6B7280]">Our goal is to make cooking enjoyable and stress-free for your audience. We offer a user-friendly experience that helps your audience obtain all the necessary ingredients to prepare delicious meals from scratch.</p>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <Image src={BrandLedger} alt="Brand-icon-pen" className="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111827] text-lg leading-6 font-medium">Pick only what you need</h3>
                <p className="text-[#6B7280] text-base leading-6 font-normal">Our ingredient list is customisable to deliver only what's necessary for the meal for your audience to cook the meal along with you.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <Image src={BrandBox} alt="Brand-icon-pen" className="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111827] text-lg leading-6 font-medium">Great Packaging & Delivery</h3>
                <p className="text-[#6B7280] text-base leading-6 font-normal">We carefully portion and pack each ingredient to arrive in optimal conditon. W aim to provide high-quality ingredients for your recipe.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full">
            <div className="absolute top-16">
              <Image src={DotPattern} alt="Dot-Pattern" />
            </div>
            <Image src={MockUp} alt="Ingredient-Recipe" className="absolute left-3" />
          </div>
        </section>
      </div>
    </div>
  );
}
