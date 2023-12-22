import { Col, Row } from "antd";
import Styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.category_header}>
        Check how good you are Select your technology
      </h1>
      <div>
        <Row gutter={[20, 20]}>
          <Col xs={12} sm={8} md={8} lg={6}>
            <div className={Styles.category_card}>
              <p
                style={{
                  padding: "20px 0",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Python
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Total Question
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                100
              </p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={6}>
            <div className={Styles.category_card}>
              <p
                style={{
                  padding: "20px 0",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Python
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Total Question
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                100
              </p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={6}>
            <div className={Styles.category_card}>
              <p
                style={{
                  padding: "20px 0",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Python
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Total Question
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                100
              </p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={6}>
            <div className={Styles.category_card}>
              <p
                style={{
                  padding: "20px 0",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Python
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Total Question
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                100
              </p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={6}>
            <div className={Styles.category_card}>
              <p
                style={{
                  padding: "20px 0",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Python
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Total Question
              </p>
              <p
                style={{
                  padding: "5px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                100
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Category;
