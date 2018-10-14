import React from "react";
import Resume from "../../dist/resume.css";
import img from "../../assets/Hannah.jpg";
import Main from "../../dist/main.css";

class ResumePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="cv" className={Resume.instaFade}>
        <div className={Resume.mainDetails}>
          <div id="headshot" className={` text-center ${Resume.quickFade}`}>
            <img
              src={img}
              alt="Hannah"
              className={`img rounded-circle ${Main.avatar}`}
            />
          </div>

          <div id="name">
            <h1 className={`${Resume.quickFade} ${Resume.delayTwo}`}>
              Hannah S. Holzmann{" "}
            </h1>
            <h2 className={`${Resume.quickFade} ${Resume.delayThree}`}>
              Software Engineer
            </h2>
          </div>

          <div
            id="contactDetails"
            className={`${Resume.quickFade} ${Resume.delayFour}`}
          >
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:hholzmann16@gmail.com" target="_blank">
                  hholzmann16@gmail.com
                </a>
              </li>
              <li>
                Github:{" "}
                <a href="http://www.github.com/hholzmann16">hholzmann16</a>
              </li>
              <li>Mobile: 818-618-7783</li>
            </ul>
          </div>
          <div className={Resume.clear} />
        </div>

        <div
          id="mainArea"
          className={`${Resume.quickFade} ${Resume.delayFive}`}
        >
          <section>
            <article>
              <div className={Resume.sectionTitle}>
                <h1>Personal Profile</h1>
              </div>

              <div className={Resume.sectionContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer dolor metus, interdum at scelerisque in, porta at
                  lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec ultricies massa et
                  erat luctus hendrerit. Curabitur non consequat enim.
                  Vestibulum bibendum mattis dignissim. Proin id sapien quis
                  libero interdum porttitor.
                </p>
              </div>
            </article>
            <div className={Resume.clear} />
          </section>

          <section>
            <div className={Resume.sectionTitle}>
              <h1>Work Experience</h1>
            </div>

            <div className={Resume.sectionContent}>
              <article>
                <h2>Job Title at Company</h2>
                <p className={Resume.subDetails}>April 2011 - Present</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultricies massa et erat luctus hendrerit. Curabitur non
                  consequat enim. Vestibulum bibendum mattis dignissim. Proin id
                  sapien quis libero interdum porttitor.
                </p>
              </article>

              <article>
                <h2>Job Title at Company</h2>
                <p className={Resume.subDetails}>Janruary 2007 - March 2011</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultricies massa et erat luctus hendrerit. Curabitur non
                  consequat enim. Vestibulum bibendum mattis dignissim. Proin id
                  sapien quis libero interdum porttitor.
                </p>
              </article>

              <article>
                <h2>Job Title at Company</h2>
                <p className={Resume.subDetails}>
                  October 2004 - December 2006
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultricies massa et erat luctus hendrerit. Curabitur non
                  consequat enim. Vestibulum bibendum mattis dignissim. Proin id
                  sapien quis libero interdum porttitor.
                </p>
              </article>
            </div>
            <div className={Resume.clear} />
          </section>

          <section>
            <div className={Resume.sectionTitle}>
              <h1>Key Skills</h1>
            </div>

            <div className={Resume.sectionContent}>
              <ul className={Resume.keySkills}>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
                <li>A Key Skill</li>
              </ul>
            </div>
            <div className={Resume.clear} />
          </section>

          <section>
            <div className={Resume.sectionTitle}>
              <h1>Education</h1>
            </div>

            <div className={Resume.sectionContent}>
              <article>
                <h2>College/University</h2>
                <p className={Resume.subDetails}>Qualification</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultricies massa et erat luctus hendrerit. Curabitur non
                  consequat enim.
                </p>
              </article>

              <article>
                <h2>College/University</h2>
                <p className={Resume.subDetails}>Qualification</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultricies massa et erat luctus hendrerit. Curabitur non
                  consequat enim.
                </p>
              </article>
            </div>
            <div className={Resume.clear} />
          </section>
        </div>
      </div>
    );
  }
}

export default ResumePage;
