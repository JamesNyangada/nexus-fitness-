"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Cta2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="call-to-action style-two" data-background="/assets/images/resource/call-bg.png">
		<div className="container">
			<div className="row dream1-bg">
				<div className="col-lg-4 col-md-6">
					<div className="contact-info">
						<div className="contact-icon">
							<i className="bi bi-envelope"></i>
						</div>
						<div className="contact-title">
							<span>Email Us</span>
							<a href="mailto:thenexusfit@gmail.com"><h5>thenexusfit@gmail.com</h5></a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="contact-info upper">
						<div className="contact-icon">
							<i className="bi bi-whatsapp"></i>
						</div>
						<div className="contact-title">
							<span>WhatsApp</span>
							<h5>0797348630</h5>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="contact-info upper2">
						<div className="contact-icon">
							<i className="bi bi-send-fill"></i>
						</div>
						<div className="contact-title">
							<span>Telegram</span>
							<h5>Telegram/Nexus</h5>
						</div>
					</div>
				</div>
				<div className="call-to-all-shape">
					<div className="call-shape">
					<Image src="/assets/images/resource/shap2.png" alt="img" width={302} height={376}   />
					</div>
					<div className="call-shape3">
					<Image src="/assets/images/resource/shap1.png" alt="img" width={41} height={42}   />
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Cta2;