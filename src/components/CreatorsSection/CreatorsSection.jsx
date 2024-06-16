import React from "react";
import "./CreatorsSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LandingPageHelpers from "../../helpers/LandingPageHelpers";

const CreatorsSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const imagePaths = LandingPageHelpers.generateImagePaths(12);
    const names = [
        "Rick Sanchez",
        "Morty Smith",
        "Summer Smith",
        "Beth Smith",
        "Jerry Smith",
        "Jaden Gary",
        "Jaden Philp",
    ];
    const statuses = ["Active", "Inactive"];

    return (
        <section className="creators">
            <h2>Around 5M+ creators</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
            </p>

            <div className="creators-list">
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={3500}
                    centerMode={true}
                    className=""
                    draggable
                    focusOnSelect={false}
                    responsive={responsive}
                    infinite={true}
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-20-px"
                >
                    {imagePaths.map((path, index) => {
                        const name = names[index % names.length];
                        const status = statuses[index % statuses.length];

                        let statusClass;
                        switch (status) {
                            case "Active":
                                statusClass = "active";
                                break;
                            case "Inactive":
                                statusClass = "inactive";
                                break;
                            default:
                                statusClass = "inactive";
                                break;
                        }
                        return (
                            <div className="profile-card">
                                <div className="status-box">
                                    <div
                                        className={`status-indicator ${statusClass}`}
                                    ></div>
                                    <span className="status-text">
                                        {status}
                                    </span>
                                </div>
                                <img
                                    src={path}
                                    alt={`Creator ${index + 1}`}
                                    className="profile-image"
                                />
                                <div className="profile-name">{name}</div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default CreatorsSection;
