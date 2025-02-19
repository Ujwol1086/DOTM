import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const Login = () => {
  const [captcha, setCaptcha] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValid, setCaptchaValid] = useState(true);
  const [mpin, setMpin] = useState("");
  const [isMPINVerified, setIsMPINVerified] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // Step 1: Login, Step 2: MPIN verification
  const navigate = useNavigate();

  // Function to generate a random alphanumeric string for captcha
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCaptcha = "";
    for (let i = 0; i < 5; i++) {
      randomCaptcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(randomCaptcha);
  };

  // Handle Next button click for login
  const handleLoginNextClick = async () => {
    if (!phoneNumber || !email) {
      alert("Please enter both phone number and email.");
      return;
    }

    if (captchaInput === captcha) {
      setCaptchaValid(true);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            PhoneNumber: phoneNumber,
            Email: email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        localStorage.setItem("PhoneNumber", phoneNumber);
        alert(response.data.message);

        if (response.status === 200) {
          setStep(2); // Move to MPIN step
        } else {
          alert("Failed to send MPIN. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error.response?.data?.message || error.message);
      }
    } else {
      setCaptchaValid(false);
      alert("Captcha is incorrect!");
    }
  };

  // Handle MPIN submission
  const handleMPINSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/verify-mpin",
        {
          PhoneNumber: phoneNumber,
          MPIN: Number(mpin),
        }
      );

      console.log(response.data);

      if (response.status === 200) {
        setIsMPINVerified(true);
        setError("");
        // Redirect to the next page or dashboard
        navigate("/details");
      }
    } catch (err) {
      setIsMPINVerified(false);
      setError("Invalid MPIN. Please try again.");
      console.log(err.message);
    }
  };

  // Handle MPIN resend
  const handleResendMPIN = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/resend-mpin",
        {
          PhoneNumber: phoneNumber,
        }
      );

      if (response.status === 200) {
        setError("");
        alert("New MPIN sent to your email.");
      }
    } catch (err) {
      setError("Error sending new MPIN.");
      console.log(err.message);
    }
  };

  useEffect(() => {
    generateCaptcha(); // Generate captcha on component mount
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-700 p-2 text-slate-100 font-semibold mt-10">
        <ul className="list-none flex gap-5 pl-28">
          <li>Home</li>
          <li>License Search</li>
          <li>Print Check</li>
          <li>FAQ</li>
          <li>Guide</li>
        </ul>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="ml-24">
          <strong className="font-semibold">
            Welcome To Online Driving License System of DoTM. Please follow the
            following steps to create your profile and submit your application.
          </strong>
          <br />
          (सवारीचालक अनुमतिपत्रको लागि आवेदन प्रणालीमा स्वागत छ । आफ्नो प्रोफाईल
          बनाई आवेदन पेश गर्नको लागि तलका प्रक्रिया पुरा गर्नुहोस्।)
        </p>

        <div className="flex mt-10">
          <div className=" ml-24 bg-white p-5 w-[40%] rounded-tl-lg rounded-bl-lg">
            {step === 1 ? (
              <>
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber">
                    <strong className="font-semibold">
                      Enter your own Mobile Number
                    </strong>{" "}
                    <span className="text-sm">
                      (आफ्नो मोबाइल नम्बर प्रविष्ट गर्नुहोस्)
                    </span>
                  </label>
                  <input
                    type="number"
                    className="border border-gray-400 rounded px-3 py-1 mt-2 focus:outline-none focus:border-blue-500 placeholder:text-sm "
                    placeholder="Mobile No"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="phoneNumber">
                    <strong className="font-semibold">Enter your Email</strong>{" "}
                  </label>
                  <input
                    type="email"
                    className="border border-gray-400 rounded px-3 py-1 mt-2 focus:outline-none focus:border-blue-500 placeholder:text-sm "
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-5 ">
                  <p>
                    <strong className="text-red-500 ">Important:</strong>
                  </p>
                  <p className="text-sm italic">
                    Please use the mobile number registered with your name to
                    sign up. You are not allowed to change it afterward. <br />
                    (यो अनलाईन फाराम भर्नका लागि प्रयोग गरिने मोबाईल नं. पछि
                    परिवर्तन गर्न नमिल्ने भएकोले आफ्नै नाममा रहेको मोबाईल नं.
                    मात्र प्रयोग गर्नुहोला ।)
                  </p>
                </div>

                {/* Captcha Section */}
                <div className="mt-5">
                  <div className="bg-gray-200 p-3 text-2xl font-bold tracking-wider text-center captcha-text">
                    {captcha}
                  </div>
                  <label htmlFor="captcha" className=" mt-3 block">
                    <strong className="font-semibold">Enter captcha</strong>{" "}
                    <span className="text-sm">
                      (माथि चित्रमा देखिएका अक्षरहरू प्रविष्ट गर्नुहोस्।)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="captcha"
                    className="border border-gray-400 rounded w-full py-1 px-3 mt-2 focus:outline-none focus:border-blue-500 placeholder:text-sm"
                    placeholder="Captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                  />
                  {!captchaValid && (
                    <p className="text-red-600">Captcha is incorrect!</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  className="bg-blue-600 text-white font-bold py-2 px-4 w-full mt-5 rounded"
                  onClick={handleLoginNextClick}
                >
                  Next
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col">
                  <label htmlFor="mpin">
                    <strong className="font-semibold">Enter your MPIN</strong>
                  </label>
                  <input
                    type="number"
                    className="border border-gray-400 rounded px-3 py-1 mt-2 focus:outline-none focus:border-blue-500 placeholder:text-sm"
                    placeholder="Enter your MPIN"
                    value={mpin}
                    onChange={(e) => setMpin(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="text-red-600 mt-3">{error}</div>}

                <div className="mt-5">
                  <p className="text-sm">
                    <i>
                      Check SMS for MPIN No. <br /> Please Note: Same MPIN is
                      used to Login Multiple times.
                    </i>
                  </p>
                </div>
                <div>
                  <button
                    className="mt-5 text-blue-600 text-sm font-semibold float-right"
                    onClick={handleResendMPIN}
                  >
                    Forgot MPIN? Click here to Re-Send MPIN.
                  </button>
                </div>

                <button
                  className="bg-blue-600 text-white font-bold py-2 px-4 w-full mt-5 rounded"
                  onClick={handleMPINSubmit}
                >
                  {isMPINVerified ? "MPIN Verified" : "Next"}
                </button>
              </>
            )}
          </div>

          <div className="p-5 bg-slate-100 w-[47%]">
            <p>
              अनलाइन आवेदन फाराम भर्ने लगायत अन्य सम्बन्धित विषय सम्बन्धी
              जानकारीहरु <br />
              <strong className="font-semibold">
                Instructions for filling online application form and others
              </strong>
            </p>

            <div className="mt-5 bg-white w-full px-8 py-5 rounded h-[24rem] overflow-hidden shadow-md">
              <ol className="list-decimal text-[12px] flex flex-col gap-5 ">
                <li>
                  नयाँ सवारी चालक अनुमतिपत्र तथा वर्ग थपका लागि यातायात व्यवस्था
                  कार्यालय / यातायात व्यवस्था सेवा कार्यालयले विवरण रुजु एवंम्
                  निवेदकको बायोमेट्रिक लिने कार्यहरु सार्वजनिक बिदा बाहेक
                  हप्ताको प्रत्येक आइतबार, सोमबार, मंगलबार र बुधबारका दिन गर्ने
                  गर्छ । यसका लागि निवेदकले यस प्रणालीमा आफ्नो निवेदक खाता बनाई
                  प्रत्येक दिनको १५औं दिन अर्थात १६ दिनभित्र लाइसेन्सको वर्ग
                  कोटा उपलब्ध भएको दिन सम्बन्धित कार्यालयमा अनलाइन आवेदन दर्ता
                  गरी कार्यालय भिजिट डेट लिन सकिनेछ । तर प्रत्येक १६ औं दिनका
                  लागि नयाँ आवेदन फाराम बिहान ७ बजे (शनिबार / आइतबार /सोमबार /
                  मङ्गलबार) मात्र खुल्ला हुन्छ र कोटा नसकिएसम्म सातै दिन २४
                  घण्टासम्म फाराम भर्न सकिन्छ । निवेदकले आफ्नो निवेदक खाता
                  एकभन्दा बढी बनाउनु हुँदैन । Transport Management Offices /
                  Transport Management Service Offices verify application
                  details and take biometric of an applicant on every 4 days of
                  a week (Sunday, Monday, Tuesday and Wednesday except public
                  holiday) for New Driving License and Category Add. For this,
                  an applicant has to register an online application against the
                  office within each 16 days if quota of license category for
                  the office is remaining by creating applicant account in the
                  system at first. New application form will be opened for each
                  16th day from 7 AM and an applicant can apply the form online
                  by 7 days and 24 hours till quota of license category is
                  available. An applicant should not create more than one
                  his/her applicant profile in the system.
                </li>
                <li>
                  अनलाइन आवेदन फाराम भर्दा निवेदकले आफ्नो मोवाइल नम्बर सहित अन्य
                  विवरण सही प्रविष्ट गर्नु पर्दछ । Correct information along
                  with applicant&apos;s mobile number should be provided while
                  filling up the online application form.
                </li>
                <li>
                  पहिचान परिचयपत्र (नागरिकता, पासपोर्ट र लाइसेन्स) को मूल
                  स्क्यान गरिएको प्रतिलिपि अपलोड गर्नुपर्छ । Original scanned
                  copy of identity documents (citizenship, passport and license)
                  must be uploaded.
                </li>
                <li>
                  विवरण रुजु एवंम् बायोमेट्रिकका लागि प्राप्त गरेको कार्यालय
                  भिजिट डेटमा निवेदक उपस्थित हुन नसकेको अवस्थामा सो मितिबाट १५
                  दिन पछि मात्र पुनः अनलाइन आवेदन भर्न सक्नेछ । If the office
                  visit date for biometric and verification of details is
                  missed, the application can be re-submitted only after 15 days
                  from the missed biometric visit date.
                </li>
                <li>
                  दर्ता गरिएको अनलाइन आवेदन फाराममा रहेको व्यक्तिगत विवरण जस्तै
                  नाम, थर, नागरिकता विवरण, मोबाइल नं. र जन्म मिति मा कुनै त्रुटि
                  भएमा उक्त फाराम रद्द हुनेछ । साथै वर्ग थपको लागि फाराम भर्दा
                  प्राप्त गरिसकेको लाइसेन्सको वर्ग गलत प्रविष्ट भएमा पनि फाराम
                  रद्द हुनेछ । The submitted form will be cancelled if the
                  personal details like name, citizenship details, mobile no.
                  and date of birth and license category(ies) for add category
                  are found incorrect.
                </li>
                <li>
                  सवारी चालक अनुमतिपत्रका लागि निवेदकको उमेर दुई पाङ्ग्रे सवारी
                  (वर्ग A/K) को लागि १६ वर्ष, साना सवारी (वर्ग B) को लागि १८
                  वर्ष र अन्य सवारीका लागि २१ वर्ष पूरा भएको हुनुपर्नेछ । Age of
                  an applicant for two-wheelers (category A/K), small vehicles
                  (category B) and other vehicles should be 16, 18 and 21 years
                  respectively.
                </li>
                <li>
                  सवारी चालकको स्मार्ट-कार्ड सवारी चालक अनुमतिपत्र सम्बन्धी
                  विवरण license search मा क्लिक गरी हेर्न सकिन्छ । Click on
                  license search to see Smart-Card Driving License of a vehicle
                  driver.
                </li>
                <li>
                  ट्रायल परीक्षामा असफल भएका परीक्षार्थीहरुले असफल भएको प्रथम
                  मितिले ९० दिनाभित्र बढीमा ३ पटक सम्म रि-ट्रायल दिन सक्नेछन् ।
                  An applicant can attend retrial exam maximum of three times
                  within 90 days from the first trial failed date.
                </li>
                <li>
                  लाइसेन्स वर्ग पावरटिलर (D) , ट्र्रयाक्टर (E) , मिनिबस, ट्रक
                  तथा बस (F, G) प्राप्त गरेका सवारी चालकले कुनैपनि अर्को वर्ग थप
                  गर्दा लिखित परीक्षा अनिवार्य दिनुपर्दछ । Applicants having
                  license categories like D, E, F and G must take written exam,
                  if you want to add another category.
                </li>
                <li>
                  बायोमेट्रिक दर्ता, लिखित तथा प्रयोगात्मक परीक्षाका लागि
                  सम्बन्धित कार्यालयमा जाँदा अनिवार्य रूपमा सक्कल नागरिकता,
                  सक्कल लाइसेन्स (वर्ग थपको हकमा) साथै लिएर मात्र जानुपर्छ ।
                  Carry original citizenship and original license (for add
                  category) with you while visiting office for biometric,
                  written and practical exams.
                </li>
                <li>
                  प्रयोगात्मक परीक्षाका दिन परीक्षार्थीले अनिवार्य रूपमा जुत्ता
                  लगाई आउनुपर्छ । साथै लिखित तथा प्रयोगात्मक परीक्षा
                  केन्द्रहरुमा मोबाइल फोन निषेध गरिएको छ । On the day of the
                  practical examination, the candidates must wear shoes. Also,
                  mobile phones are prohibited in written and practical
                  examination centers.
                </li>
                <li>
                  आफ्नो स्मार्ट-कार्ड सवारी चालक अनुमतिपत्र छपाई भए/नभएको बारेमा
                  जानकारीका लागि license print check क्लिक गरी जानकारी प्राप्त
                  गर्न सकिन्छ । Access license print check to check whether
                  smart-card driving license is printed or not.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
