"use client";
import AddressesSection from "@/widgets/AddressesSection";
import DrinksMenu from "@/widgets/DrinksMenu";
import MainSection from "@/widgets/MainSection";
import MarketsSection from "@/widgets/MarketsSection";
import BlogSection from "@/widgets/BlogSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <DrinksMenu />
      <AddressesSection />
      <MarketsSection />
      <BlogSection />
    </>
  );
}
