import { useState, useEffect } from "react";

const MPIN = () => {
  const [captcha, setCaptcha] = useState("");

  // Function to generate a random alphanumeric string
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

  useEffect(() => {
    generateCaptcha(); // Generate captcha on component mount
  }, []);

  return (
    <>
      {/* Body */}

      <div className="flex mt-10">
        <div className=" ml-24 bg-white p-5 w-[40%] rounded-tl-lg rounded-bl-lg">
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">
              <strong className="font-semibold">Enter your MPIN Number</strong>{" "}
              <span className="text-sm">
                (आफ्नो <b>MPIN</b> नम्बर प्रविष्ट गर्नुहोस्)
              </span>
            </label>
            <input
              type="number"
              className="border border-gray-400 rounded px-3 py-1 mt-2 focus:outline-none focus:border-blue-500 placeholder:text-sm"
              placeholder="Check mpin in your mobile message box"
              required
            />
          </div>
          <div className="mt-5">
            <p className="text-sm">
              <i>
                Check SMS for MPIN No. <br /> Please Note: Same MPIN is used to
                Login Multiple times.
              </i>
            </p>
          </div>
          <div>
            <button className="mt-5 text-blue-600 text-sm font-semibold float-right">
              Forgot MPIN ? Please Click here to Re-Send MPIN.
            </button>
          </div>
          {/* Submit Button */}
          <button className="bg-blue-600 text-white font-bold py-2 px-4 w-full mt-5 rounded">
            Next
          </button>
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
                निवेदकको बायोमेट्रिक लिने कार्यहरु सार्वजनिक बिदा बाहेक हप्ताको
                प्रत्येक आइतबार, सोमबार, मंगलबार र बुधबारका दिन गर्ने गर्छ ।
                यसका लागि निवेदकले यस प्रणालीमा आफ्नो निवेदक खाता बनाई प्रत्येक
                दिनको १५औं दिन अर्थात १६ दिनभित्र लाइसेन्सको वर्ग कोटा उपलब्ध
                भएको दिन सम्बन्धित कार्यालयमा अनलाइन आवेदन दर्ता गरी कार्यालय
                भिजिट डेट लिन सकिनेछ । तर प्रत्येक १६ औं दिनका लागि नयाँ आवेदन
                फाराम बिहान ७ बजे (शनिबार / आइतबार /सोमबार / मङ्गलबार) मात्र
                खुल्ला हुन्छ र कोटा नसकिएसम्म सातै दिन २४ घण्टासम्म फाराम भर्न
                सकिन्छ । निवेदकले आफ्नो निवेदक खाता एकभन्दा बढी बनाउनु हुँदैन ।
                Transport Management Offices / Transport Management Service
                Offices verify application details and take biometric of an
                applicant on every 4 days of a week (Sunday, Monday, Tuesday and
                Wednesday except public holiday) for New Driving License and
                Category Add. For this, an applicant has to register an online
                application against the office within each 16 days if quota of
                license category for the office is remaining by creating
                applicant account in the system at first. New application form
                will be opened for each 16th day from 7 AM and an applicant can
                apply the form online by 7 days and 24 hours till quota of
                license category is available. An applicant should not create
                more than one his/her applicant profile in the system.
              </li>
              <li>
                अनलाइन आवेदन फाराम भर्दा निवेदकले आफ्नो मोवाइल नम्बर सहित अन्य
                विवरण सही प्रविष्ट गर्नु पर्दछ । Correct information along with
                applicant&apos;s mobile number should be provided while filling
                up the online application form.
              </li>
              <li>
                पहिचान परिचयपत्र (नागरिकता, पासपोर्ट र लाइसेन्स) को मूल स्क्यान
                गरिएको प्रतिलिपि अपलोड गर्नुपर्छ । Original scanned copy of
                identity documents (citizenship, passport and license) must be
                uploaded.
              </li>
              <li>
                विवरण रुजु एवंम् बायोमेट्रिकका लागि प्राप्त गरेको कार्यालय भिजिट
                डेटमा निवेदक उपस्थित हुन नसकेको अवस्थामा सो मितिबाट १५ दिन पछि
                मात्र पुनः अनलाइन आवेदन भर्न सक्नेछ । If the office visit date
                for biometric and verification of details is missed, the
                application can be re-submitted only after 15 days from the
                missed biometric visit date.
              </li>
              <li>
                दर्ता गरिएको अनलाइन आवेदन फाराममा रहेको व्यक्तिगत विवरण जस्तै
                नाम, थर, नागरिकता विवरण, मोबाइल नं. र जन्म मिति मा कुनै त्रुटि
                भएमा उक्त फाराम रद्द हुनेछ । साथै वर्ग थपको लागि फाराम भर्दा
                प्राप्त गरिसकेको लाइसेन्सको वर्ग गलत प्रविष्ट भएमा पनि फाराम
                रद्द हुनेछ । The submitted form will be cancelled if the
                personal details like name, citizenship details, mobile no. and
                date of birth and license category(ies) for add category are
                found incorrect.
              </li>
              <li>
                सवारी चालक अनुमतिपत्रका लागि निवेदकको उमेर दुई पाङ्ग्रे सवारी
                (वर्ग A/K) को लागि १६ वर्ष, साना सवारी (वर्ग B) को लागि १८ वर्ष
                र अन्य सवारीका लागि २१ वर्ष पूरा भएको हुनुपर्नेछ । Age of an
                applicant for two-wheelers (category A/K), small vehicles
                (category B) and other vehicles should be 16, 18 and 21 years
                respectively.
              </li>
              <li>
                सवारी चालकको स्मार्ट-कार्ड सवारी चालक अनुमतिपत्र सम्बन्धी विवरण
                license search मा क्लिक गरी हेर्न सकिन्छ । Click on license
                search to see Smart-Card Driving License of a vehicle driver.
              </li>
              <li>
                ट्रायल परीक्षामा असफल भएका परीक्षार्थीहरुले असफल भएको प्रथम
                मितिले ९० दिनाभित्र बढीमा ३ पटक सम्म रि-ट्रायल दिन सक्नेछन् । An
                applicant can attend retrial exam maximum of three times within
                90 days from the first trial failed date.
              </li>
              <li>
                लाइसेन्स वर्ग पावरटिलर (D) , ट्र्रयाक्टर (E) , मिनिबस, ट्रक तथा
                बस (F, G) प्राप्त गरेका सवारी चालकले कुनैपनि अर्को वर्ग थप गर्दा
                लिखित परीक्षा अनिवार्य दिनुपर्दछ । Applicants having license
                categories like D, E, F and G must take written exam, if you
                want to add another category.
              </li>
              <li>
                बायोमेट्रिक दर्ता, लिखित तथा प्रयोगात्मक परीक्षाका लागि
                सम्बन्धित कार्यालयमा जाँदा अनिवार्य रूपमा सक्कल नागरिकता, सक्कल
                लाइसेन्स (वर्ग थपको हकमा) साथै लिएर मात्र जानुपर्छ । Carry
                original citizenship and original license (for add category)
                with you while visiting office for biometric, written and
                practical exams.
              </li>
              <li>
                प्रयोगात्मक परीक्षाका दिन परीक्षार्थीले अनिवार्य रूपमा जुत्ता
                लगाई आउनुपर्छ । साथै लिखित तथा प्रयोगात्मक परीक्षा केन्द्रहरुमा
                मोबाइल फोन निषेध गरिएको छ । On the day of the practical
                examination, the candidates must wear shoes. Also, mobile phones
                are prohibited in written and practical examination centers.
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
    </>
  );
};

export default MPIN;
