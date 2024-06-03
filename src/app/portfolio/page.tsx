"use client"
import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Portfolio: NextPage = () => {
  const pathUrl = usePathname();
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              {/* <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                <Link
                  href="/services"
                  className={`${pathUrl == "/services" && "active"}`}
                >
                  <i className="fa fa-list" /> Services
                </Link>
              </button> */}
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/Four/1.PNG" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4> Project 4.0</h4>
                  <div className="icon">
                  <Link
                      href="/FourPointO"
                      className={`${pathUrl == "/FourPointO" && "active"}`}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/php/ddp2.webp" alt="PHP" />
                </div>
                <div className="portfolio-info">
                  <h4>Project PHP</h4>
                  <div className="icon">
                    <Link
                      href="/Project"
                      className={`${pathUrl == "/Project" && "active"}`}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/mobile.PNG" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Augmented Reality and Mobile App Development</h4>
                  <div className="icon">
                  <Link
                      href="/Mobile"
                      className={`${pathUrl == "/Mobile" && "active"}`}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/RequirementsAnalysis/1.webp" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Requirements Analysis</h4>
                  <div className="icon">
                  <Link
                      href="/RequirementsAnalysis "
                      className={`${pathUrl == "/RequirementsAnalysis " && "active"}`}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Web Portfolio</h4>
                  <div className="icon">
                  <Link
                      href="/WebPortfolio "
                      className={`${pathUrl == "/WebPortfolio " && "active"}`}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/Angular/1.jpeg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Angular</h4>
                  <div className="icon">
                  <Link
                      href="/Angular "
                      className={`${pathUrl == "/Angular " && "active"}`}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
