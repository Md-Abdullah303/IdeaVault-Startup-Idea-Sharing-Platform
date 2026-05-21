"use client";
import getAllIdeas from "@/lib/getData/data";
import { Button, Dropdown, Label } from "@heroui/react";
import gsap from "gsap";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const IdeasSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [shorting, setShorting] = useState("");
  const searchParams = useSearchParams();
  const searchRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const animation = () => {
      gsap.from(searchRef.current, {
        x: -25,
        opacity: 0,
        duration: 0.7,
      });
      gsap.to(searchRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.7,
      });
      gsap.from(dropdownRef.current, {
        x: 25,
        opacity: 0,
        duration: 0.7,
      });
      gsap.to(dropdownRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.7,
      });
    };
    animation();
  }, []);

  const handleSearch = async () => {
    // console.log(search, "-search");
    // console.log(category, "-category");
    // console.log(shorting, "-shorting");

    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (category) params.append("filter", category);
    if (shorting) params.append("shorting", shorting);

    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
      {/* search Bar */}
      <div
        ref={searchRef}
        className="border rounded-[4px] w-fit overflow-hidden flex items-center bg-white"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by title"
          className="py-2 lg:w-120 md:w-80 sm:w-60 w-55 px-4 outline-none text-gray-400"
        />
        <button
          onClick={handleSearch}
          className="bg-slate-600 text-white py-2 px-4 text-xl font-bold"
        >
          Search
        </button>
      </div>
      {/* filter drowpdown */}
      <div ref={dropdownRef} className="flex items-center gap-4">
        <div className="">
          <Dropdown>
            <Button
              className={"rounded-xs border bg-white text-gray-400"}
              aria-label="Menu"
              variant="secondary"
            >
              {category || "Category"} <IoMdArrowDropdown />
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu
                onAction={(key) => {
                  if (key === "All") {
                    setCategory("");
                  } else {
                    setCategory(key);
                  }
                  //   console.log(key);
                  const params = new URLSearchParams(searchParams.toString());
                  //   console.log(params);
                  params.set("filter", key);

                  router.push(`/ideas?${params.toString()}`);
                }}
              >
                <Dropdown.Item id="" textValue="All">
                  <Label>All</Label>
                </Dropdown.Item>
                <Dropdown.Item id="Tech" textValue="Tech">
                  <Label>Tech</Label>
                </Dropdown.Item>
                <Dropdown.Item id="Health" textValue="Health">
                  <Label>Health</Label>
                </Dropdown.Item>
                <Dropdown.Item id="AI" textValue="AI">
                  <Label>AI</Label>
                </Dropdown.Item>
                <Dropdown.Item id="Education" textValue="Education">
                  <Label>Education</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
        {/* sorted by USD */}
        <div className="">
          <Dropdown>
            <Button
              className={"rounded-xs border bg-white text-gray-400"}
              aria-label="Menu"
              variant="secondary"
            >
              {shorting || "Price"} <IoMdArrowDropdown />
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu
                onAction={(key) => {
                  if (key === "Normal") {
                    setShorting("");
                  } else {
                    setShorting(key);
                  }

                  const params = new URLSearchParams(window.location.search);
                  params.set("shorting", key);

                  router.push(`/ideas?${params.toString()}`);
                }}
              >
                <Dropdown.Item id="" textValue="Normal">
                  <Label>Normal</Label>
                </Dropdown.Item>
                <Dropdown.Item id="highToLow" textValue="highToLow">
                  <Label>high to low</Label>
                </Dropdown.Item>
                <Dropdown.Item id="lowToHigh" textValue="lowToHigh">
                  <Label>low to high</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default IdeasSearch;
