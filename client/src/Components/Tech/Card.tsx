import React from "react";

export type TechCard = {
  id: number;
  title: string;
  image: string;
  paragraph: string;
};

export interface CardProps {
  tech: TechCard;
}

const Card: React.FunctionComponent<CardProps> = ({ tech }) => {
  return (
    <div
      data-aos={tech.id % 2 === 0 ? "fade-right" : "fade-left"}
      className="col-12 my-4"
    >
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card-title">
                  <h3 className="h3 font-weight-bold">{tech.title}</h3>
                </div>
              </div>
            </div>
            {tech.id % 2 === 0 && (
              <div className="row">
                <div className="col-md-12 col-lg-4 my-auto">
                  <img
                    className="responsive-img"
                    src={require(`./img/${tech.image}.svg`)}
                    alt=""
                  />
                </div>
                <div className="col-md-12 col-lg-8 my-auto">
                  <p className="card-text mt-3 p-2 lead">{tech.paragraph}</p>
                </div>
              </div>
            )}

            {tech.id % 2 !== 0 && (
              <div className="row">
                <div className="col-md-12 col-lg-8 my-auto">
                  <p className="card-text mt-3 p-2 lead">{tech.paragraph}</p>
                </div>
                <div className="col-md-12 col-lg-4 my-auto">
                  <img
                    className="responsive-img"
                    src={require(`./img/${tech.image}.svg`)}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
