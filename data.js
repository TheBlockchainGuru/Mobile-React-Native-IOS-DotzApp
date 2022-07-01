// export const defaultLocation = [21.110343099999998, 52.2428017]; Warsaw
export const defaultLocation = [-118.243683, 34.052235];

export const privacyBubbleData = {
  distance: 0.5,
  dismentions: 'miles',
};

export const adminMessages = [
  'I want to add a new Club',
  'I want to get verified',
  'Report',
];

export const activities = [
  {
    id: 1,
    name: 'Running',
    image: require('./assets/icons/activities/running.png'),
  },
  {
    id: 2,
    name: 'Hiking',
    image: require('./assets/icons/activities/hiking.png'),
  },
  {
    id: 3,
    name: 'Skateboard',
    image: require('./assets/icons/activities/skateboard.png'),
  },
  {
    id: 4,
    name: 'Bike',
    image: require('./assets/icons/activities/bike.png'),
  },
  {
    id: 5,
    name: 'Motor Bike',
    image: require('./assets/icons/activities/motor-bike.png'),
  },
  {
    id: 6,
    name: 'Scooter',
    image: require('./assets/icons/activities/scooter.png'),
  },
  {
    id: 7,
    name: 'Car',
    image: require('./assets/icons/activities/car.png'),
  },
  {
    id: 8,
    name: 'Walking',
    image: require('./assets/icons/activities/walking.png'),
  },
  {
    id: 9,
    name: 'Rollerskate',
    image: require('./assets/icons/activities/rollerskate.png'),
  },
  {
    id: 10,
    name: 'Snowboarding',
    image: require('./assets/icons/activities/snowboarding.png'),
  },
];

export const errorsContent = {
  wrongLoginData: {
    title: 'Login error',
    text: 'Something went wrong. Check your values and try again.',
  },
  avoidPicture: {
    title: 'Picture error',
    text: 'Upload profile photo',
  },
  checkEmailAndPassword: {
    title: 'Error',
    text: 'Check your emali and password and try again',
  },
  invalidEmail: {
    title: 'Email error',
    text: 'Your email is invalid',
  },
  invalidPassword: {
    title: 'Password error',
    text: 'Your password have to contain at least 8 symbols',
  },
  invalidCheckPassword: {
    title: 'Password error',
    text: 'Passwords do not match',
  },
  termsUnaccepted: {
    title: 'Is necessary to proceed',
    text: 'Need to accept the Terms of Service',
  },
  invalidName: {
    title: 'User name error',
    text: 'Nickname is required and must contain at least 3 symbols',
  },
  invalidCity: {
    title: 'City error',
    text: 'City is required',
  },
  invalidActivities: {
    title: 'Activities error',
    text: 'Choose at least one activity',
  },
  registrationError: {
    title: 'Registration error',
    text: 'Something went wrong. Check your values and try again.',
  },
  noLocations: {
    title: "You don't have any saved locations",
  },
  routeStartingDistanceError: {
    title: "Can't start the route",
    text: 'You must be closer than 0.1 Mile to start the route',
  },
  routeFinishingDistanceError: {
    title: "Can't finish the route",
    text: 'You must be closer than 0.1 Mile to finish the route',
  },
  geolocationError: {
    title: 'Geolocation error',
    text:
      "Currently we can't read you coordinates. Please change your location and try again",
  },
};

export const privacyBubbleContent = {
  title: 'Set up your Privacy Bubble',
  text:
    'You will not be tracked or displayed while you presenting in that area',
};

export const postAddedContent = {
  title: 'Is done',
  text: 'Post was successfully added',
};

export const postDeleteContent = {
  title: 'Post deleting',
  text: 'Are you sure you want to delte this post?',
};

export const profileUpdatedContent = {
  title: 'Profile updated',
  text: 'Your profile data was successfully updated',
};

export const swipeToUpdateContent = {
  title: 'Tip',
  text: 'Swipe down to update',
};

export const geoLocationDisabledContent = {
  title: 'Please enable geo location services',
};

export const cities = [
  'New York (New York)',
  'Los Angeles (California)',
  'Chicago (Illinois)',
  'Houston (Texas)',
  'Philadelphia (Pennsylvania)',
  'Phoenix (Arizona)',
  'San Antonio (Texas)',
  'San Diego (California)',
  'Dallas (Texas)',
  'San Jose (California)',
  'Austin (Texas)',
  'Jacksonville (Florida)',
  'San Francisco (California)',
  'Indianapolis (Indiana)',
  'Columbus (Ohio)',
  'Fort Worth (Texas)',
  'Charlotte (North Carolina)',
  'Detroit (Michigan)',
  'El Paso (Texas)',
  'Seattle (Washington)',
  'Denver (Colorado)',
  'Washington, D.C.',
  'Memphis (Tennessee)',
  'Boston (Massachusetts)',
  'Nashville (Tennessee)',
  'Baltimore (Maryland)',
  'Oklahoma City (Oklahoma)',
  'Portland (Oregon)',
  'Las Vegas (Nevada)',
  'Louisville (Kentucky)',
  'Milwaukee (Wisconsin)',
  'Albuquerque (New Mexico)',
  'Tucson (Arizona)',
  'Fresno (California)',
  'Sacramento (California)',
  'Long Beach (California)',
  'Kansas City (Missouri)',
  'Mesa (Arizona)',
  'Atlanta (Georgia)',
  'Virginia Beach (Virginia)',
  'Omaha (Nebraska)',
  'Colorado Springs (Colorado)',
  'Roles (North Carolina)',
  'Miami (Florida)',
  'Auckland (California)',
  'Minneapolis (Minnesota)',
  'Tulsa (Oklahoma)',
  'Cleveland (Ohio)',
  'Wichita (Kansas)',
  'New Orleans (Louiziana)',
  'Arlington (Texas)',
  'Bakersfield (California)',
  'Tampa (Florida)',
  'Aurora (Colorado)',
  'Honolulu (Hawaii)',
  'Anaheim (California)',
  'Santa Ana (California)',
  'Corpus Christi (Texas)',
  'Riverside (California)',
  'St. Louis (Missouri)',
  'Lexington (Kentucky)',
  'Pittsburgh (Pennsylvania)',
  'Stockton (California)',
  'Anchorage (Alaska)',
  'Cincinnati (Ohio)',
  'St. Paul (Minnesota)',
  'Greensboro (North Carolina)',
  'Toledo (Ohio)',
  'Newark (New Jersey)',
  'Plano (Texas)',
  'Henderson (Nevada)',
  'Lincoln (Nebraska)',
  'Orlando (Florida)',
  'Jersey City (New Jersey)',
  'Chula Vista (California)',
  'Buffalo (New York)',
  'Fort Wayne (Indiana)',
  'Chandler (Arizona)',
  'Saint Petersburg (Florida)',
  'Laredo (Texas)',
  'Durham (North Carolina)',
  'Irvine (California)',
  'Madison (Wisconsin)',
  'Norfolk (Virginia)',
  'Lubbock (Texas)',
  'Gilbert (Arizona)',
  'Winston-Salem (North Carolina)',
  'Reno (Nevada)',
  'Hayalia (Florida)',
  'Garland (Texas)',
  'Chesapeake (Virginia)',
  'Irving (Texas)',
  'North Las Vegas (Nevada)',
  'Scottsdale (Arizona)',
  'Baton Rouge (Louiziana)',
  'Fremont (California)',
  'Richmond (Virginia)',
  'Boise (Idaho)',
  'San Bernardino (California)',
  'Baton Rouge',
  'Tacoma',
  'San Bernardino',
  'Modesto',
  'Fontana',
  'Des Moines',
  'Moreno Valley',
  'Santa Clarita',
  'Fayetteville',
  'Birmingham',
  'Oxnard',
  'Rochester',
  'Port St. Lucie',
  'Grand Rapids',
  'Huntsville',
  'Salt Lake City',
  'Frisco',
  'Yonkers',
  'Amarillo',
  'Glendale',
  'Huntington Beach',
  'McKinney',
  'Montgomery',
  'Augusta',
  'Aurora',
  'Akron',
  'Little Rock',
  'Tempe',
  'Columbus',
  'Overland Park',
  'Grand Prairie',
  'Tallahassee',
  'Cape Coral',
  'Mobile',
  'Knoxville',
  'Shreveport',
  'Worcester',
  'Ontario',
  'Vancouver',
  'Sioux Falls',
  'Chattanooga',
  'Brownsville',
  'Fort Lauderdale',
  'Providence',
  'Newport News',
  'Rancho Cucamonga',
  'Santa Rosa',
  'Peoria',
  'Oceanside',
  'Elk Grove',
  'Salem',
  'Pembroke Pines',
  'Eugene',
  'Garden Grove',
  'Cary',
  'Fort Collins',
  'Corona',
  'Springfield',
  'Jackson',
  'Alexandria',
  'Hayward',
  'Clarksville',
  'Lakewood',
  'Lancaster',
  'Salinas',
  'Palmdale',
  'Hollywood (Florida)',
  'Springfield',
  'Macon',
  'Kansas City',
  'Sunnyvale',
  'Pomona',
  'Killeen',
  'Escondido',
  'Pasadena (Texas)',
  'Naperville',
  'Bellevue',
  'Joliet',
  'Murfreesboro',
  'Midland',
  'Rockford',
  'Paterson',
  'Savannah',
  'Bridgeport',
  'Torrance',
  'McAllen',
  'Syracuse',
  'Surprise',
  'Denton',
  'Roseville',
  'Thornton',
  'Miramar',
  'Pasadena (California)',
  'Mesquite',
  'Olathe',
  'Dayton',
  'Carrollton',
  'Waco',
  'Orange',
  'Fullerton',
  'Charleston',
];

export const termsAndConditionsData = [
  'Terms & Conditions\n',
  'Effective Date: March th, 2020\n',
  'DOTZ mobile application\n',
  '\n',
  'THE AGREEMENT: The use of this Application and services on this Application provided by “DOTZ mobile Application” owners (hereinafter referred to as "Company") are subject to the following Terms & Conditions (hereinafter the "Agreement"), all parts and sub-parts of which are specifically incorporated by reference here. This Agreement shall govern the use of all pages on this Application (hereinafter collectively referred to as "Application") and any services provided by or on this Application ("Services").\n',
  '\n',
  '1) DEFINITIONS\n',
  'The parties referred to in this Agreement shall be defined as follows:\n',
  'a) Company, Us, We: The Company, as the creator, operator, and publisher of the Application, makes the Application, and certain Services on it, available to users. John Ketcham Productions, Company, Us, We, Our, Ours and other first-person pronouns will refer to the Company, as well as all employees and affiliates of the Company.\n',
  'b) You, the User, the Client: You, as the user of the Application, will be referred to throughout this Agreement with second-person pronouns such as You, Your, Yours, or as User or Client.\n',
  'c) Parties: Collectively, the parties to this Agreement (the Company and You) will be referred to as Parties.\n',
  '\n',
  '\n',
  '2) ASSENT & ACCEPTANCE\n',
  'By using the Application, You warrant that You have read and reviewed this Agreement and that You agree to be bound by it. If You do not agree to be bound by this Agreement, please leave the Application immediately. The Company only agrees to provide use of this Application and Services to You if You assent to this Agreement.\n',
  '\n',
  '\n',
  '3) LICENSE TO USE Application\n',
  'The Company may provide You with certain information as a result of Your use of the Application or Services. Such information may include, but is not limited to, documentation, data, or information developed by the Company, and other materials which may assist in Your use of the Application or Services ("Company Materials"). Subject to this Agreement, the Company grants You a non-exclusive, limited, non-transferable and revocable license to use the Company Materials solely in connection with Your use of the Application and Services. The Company Materials may not be used for any other purpose, and this license terminates upon Your cessation of use of the Application or Services or at the termination of this Agreement.\n',
  '\n',
  '\n',
  '4) INTELLECTUAL PROPERTY\n',
  'You agree that the Application and all Services provided by the Company are the property of the Company, including all copyrights, trademarks, trade secrets, patents, and other intellectual property ("Company IP"). You agree that the Company owns all right, title and interest in and to the Company IP and that You will not use the Company IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Company IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Company.\n',
  '\n',
  '5) USER OBLIGATIONS\n',
  'As a user of the Application or Services, You may be asked to register with Us. When You do so, You will choose a user identifier, which may be Your email address or another term, as well as a password. You may also provide personal information, including, but not limited to, Your name. You are responsible for ensuring the accuracy of this information. This identifying information will enable You to use the Application and Services. You must not share such identifying information with any third party, and if You discover that Your identifying information has been compromised, You agree to notify Us immediately in writing. Email notification will suffice. You are responsible for maintaining the safety and security of Your identifying information as well as keeping Us apprised of any changes to Your identifying information. Providing false or inaccurate information, or using the Application or Services to further fraud or unlawful activity is grounds for immediate termination of this Agreement.\n',
  '\n',
  '\n',
  '6) ACCEPTABLE USE\n',
  'You agree not to use the Application or Services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Application or Services in any way that could damage the Application, Services, or general business of the Company.\n',
  'a) You further agree not to use the Application or Services:\n',
  "I) To harass, abuse, or threaten others or otherwise violate any person's legal rights;\n",
  'II) To violate any intellectual property rights of the Company or any third party;\n',
  'III) To upload or otherwise disseminate any computer viruses or other software that may damage the property of another;\n',
  'IV) To perpetrate any fraud;\n',
  'V) To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme;\n',
  'VI) To publish or distribute any obscene or defamatory material;\n',
  'VII) To publish or distribute any material that incites violence, hate, or discrimination towards any group;\n',
  'VIII) To unlawfully gather information about others.\n',
  '\n',
  '\n',
  '\n',
  '7) REVERSE ENGINEERING & SECURITY\n',
  'You agree not to undertake any of the following actions:\n',
  'a) Reverse engineer, or attempt to reverse engineer or disassemble any code or software from or on the Application or Services;\n',
  'b) Violate the security of the Application or Services through any unauthorized access, circumvention of encryption or other security tools, data mining or interference to any host, user or network.\n',
  '\n',
  '\n',
  '8) DATA LOSS\n',
  'The Company does not accept responsibility for the security of Your account or content. You agree that Your use of the Application or Services is at Your own risk.\n',
  '\n',
  '\n',
  '9) INDEMNIFICATION\n',
  "You agree to defend and indemnify the Company and any of its affiliates (if applicable) and hold Us harmless against any and all legal claims and demands, including reasonable attorney's fees, which may arise from or relate to Your use or misuse of the Application or Services, Your breach of this Agreement, or Your conduct or actions. You agree that the Company shall be able to select its own legal counsel and may participate in its own defense, if the Company wishes.\n",
  '\n',
  '\n',
  '10) SPAM POLICY\n',
  "You are strictly prohibited from using the Application or any of the Company's Services for illegal spam activities, including gathering email addresses and personal information from others or sending any mass commercial emails.\n",
  '\n',
  '\n',
  '11) THIRD-PARTY LINKS & CONTENT\n',
  'The Company may occasionally post links to third party Applications or other services. You agree that the Company is not responsible or liable for any loss or damage caused as a result of Your use of any third party services linked to from Our Application.\n',
  '\n',
  '\n',
  '12) MODIFICATION & VARIATION\n',
  'The Company may, from time to time and at any time without notice to You, modify this Agreement. You agree that the Company has the right to modify this Agreement or revise anything contained herein. You further agree that all modifications to this Agreement are in full force and effect immediately upon posting on the Application and that modifications or variations will replace any prior version of this Agreement, unless prior versions are specifically referred to or incorporated into the latest modification or variation of this Agreement.\n',
  'a) To the extent any part or sub-part of this Agreement is held ineffective or invalid by any court of law, You agree that the prior, effective version of this Agreement shall be considered enforceable and valid to the fullest extent.\n',
  'b) You agree to routinely monitor this Agreement and refer to the Effective Date posted at the top of this Agreement to note modifications or variations. You further agree to clear Your cache when doing so to avoid accessing a prior version of this Agreement. You agree that Your continued use of the Application after any modifications to this Agreement is a manifestation of Your continued assent to this Agreement.\n',
  'c) In the event that You fail to monitor any modifications to or variations of this Agreement, You agree that such failure shall be considered an affirmative waiver of Your right to review the modified Agreement.\n',
  '\n',
  '\n',
  '13) ENTIRE AGREEMENT\n',
  'This Agreement constitutes the entire understanding between the Parties with respect to any and all use of this Application. This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral, regarding the use of this Application.\n',
  '\n',
  '\n',
  '14) SERVICE INTERRUPTIONS\n',
  'The Company may need to interrupt Your access to the Application to perform maintenance or emergency services on a scheduled or unscheduled basis. You agree that Your access to the Application may be affected by unanticipated or unscheduled downtime, for any reason, but that the Company shall have no liability for any damage or loss caused as a result of such downtime.\n',
  '\n',
  '\n',
  '15) TERM, TERMINATION & SUSPENSION\n',
  'The Company may terminate this Agreement with You at any time for any reason, with or without cause. The Company specifically reserves the right to terminate this Agreement if You violate any of the terms outlined herein, including, but not limited to, violating the intellectual property rights of the Company or a third party, failing to comply with applicable laws or other legal obligations, and/or publishing or distributing illegal material. If You have registered for an account with Us, You may also terminate this Agreement at any time by contacting Us and requesting termination. At the termination of this Agreement, any provisions that would be expected to survive termination by their nature shall remain in full force and effect.\n',
  '\n',
  '\n',
  '16) NO WARRANTIES\n',
  'You agree that Your use of the Application and Services is at Your sole and exclusive risk and that any Services provided by Us are on an "As Is" basis. The Company hereby expressly disclaims any and all express or implied warranties of any kind, including, but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability. The Company makes no warranties that the Application or Services will meet Your needs or that the Application or Services will be uninterrupted, error-free, or secure. The Company also makes no warranties as to the reliability or accuracy of any information on the Application or obtained through the Services. You agree that any damage that may occur to You, through Your computer system, or as a result of loss of Your data from Your use of the Application or Services is Your sole responsibility and that the Company is not liable for any such damage or loss.\n',
  '\n',
  '\n',
  '17) LIMITATION ON LIABILITY\n',
  'The Company is not liable for any damages that may occur to You as a result of Your use of the Application or Services, to the fullest extent permitted by law. The maximum liability of the Company arising from or relating to this Agreement is limited to the greater of one hundred ($100) US Dollars or the amount You paid to the Company in the last six (6) months. This section applies to any and all claims by You, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.\n',
  '\n',
  '\n',
  '18) GENERAL PROVISIONS:\n',
  'a) LANGUAGE: All communications made or notices given pursuant to this Agreement shall be in the English language.\n',
  'b) JURISDICTION, VENUE & CHOICE OF LAW: Through Your use of the Application or Services, You agree that the laws of the State of California shall govern any matter or dispute relating to or arising out of this Agreement, as well as any dispute of any kind that may arise between You and the Company, with the exception of its conflict of law provisions. In case any litigation specifically permitted under this Agreement is initiated, the Parties agree to submit to the personal jurisdiction of the state and federal courts of the following county: Los Angeles, California. The Parties agree that this choice of law, venue, and jurisdiction provision is not permissive, but rather mandatory in nature. You hereby waive the right to any objection of venue, including assertion of the doctrine of forum non conveniens or similar doctrine.\n',
  'c) ARBITRATION: In case of a dispute between the Parties relating to or arising out of this Agreement, the Parties shall first attempt to resolve the dispute personally and in good faith. If these personal resolution attempts fail, the Parties shall then submit the dispute to binding arbitration. The arbitration shall be conducted in the following county: Los Angeles. The arbitration shall be conducted by a single arbitrator, and such arbitrator shall have no authority to add Parties, vary the provisions of this Agreement, award punitive damages, or certify a class. The arbitrator shall be bound by applicable and governing Federal law as well as the law of the following state: California. Each Party shall pay their own costs and fees. Claims necessitating arbitration under this section include, but are not limited to: contract claims, tort claims, claims based on Federal and state law, and claims based on local laws, ordinances, statutes or regulations. Intellectual property claims by the Company will not be subject to arbitration and may, as an exception to this sub-part, be litigated. The Parties, in agreement with this sub-part of this Agreement, waive any rights they may have to a jury trial in regard to arbitral claims.\n',
  'd) ASSIGNMENT: This Agreement, or the rights granted hereunder, may not be assigned, sold, leased or otherwise transferred in whole or part by You. Should this Agreement, or the rights granted hereunder, by assigned, sold, leased or otherwise transferred by the Company, the rights and liabilities of the Company will bind and inure to any assignees, administrators, successors, and executors.\n',
  'e) SEVERABILITY: If any part or sub-part of this Agreement is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible. In such condition, the remainder of this Agreement shall continue in full force.\n',
  'f) NO WAIVER: In the event that We fail to enforce any provision of this Agreement, this shall not constitute a waiver of any future enforcement of that provision or of any other provision. Waiver of any part or sub-part of this Agreement will not constitute a waiver of any other part or sub-part.\n',
  'g) HEADINGS FOR CONVENIENCE ONLY: Headings of parts and sub-parts under this Agreement are for convenience and organization, only. Headings shall not affect the meaning of any provisions of this Agreement.\n',
  'h) NO AGENCY, PARTNERSHIP OR JOINT VENTURE: No agency, partnership, or joint venture has been created between the Parties as a result of this Agreement. No Party has any authority to bind the other to third parties.\n',
  'i) FORCE MAJEURE: The Company is not liable for any failure to perform due to causes beyond its reasonable control including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature and natural disasters, and other acts which may be due to unforeseen circumstances.\n',
  'j) ELECTRONIC COMMUNICATIONS PERMITTED: Electronic communications are permitted to both Parties under this Agreement, including e-mail or fax. For any questions or concerns, please email Us at the following address: officialdotzapp@gmail.com\n',
];

export const privacyPolicyData = [
  'Privacy Policy of DOTZ\n',
  'In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner.\n',
  '\n',
  'Owner and Data Controller\n',
  'DOTZ APP 7190 SUNSET BLVD #1182 LOS ANGELES CA 90046\n',
  '\n',
  'Owner contact email: officialdotzapp@gmail.com\n',
  '\n',
  'Types of Data collected\n',
  'The owner does not provide a list of Personal Data types collected.\n',
  '\n',
  'Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.\n',
  'Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.\n',
  'Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.\n',
  'Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.\n',
  'Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.\n',
  '\n',
  "Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.\n",
  '\n',
  'Mode and place of processing the Data\n',
  'Methods of processing\n',
  'The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.\n',
  'The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.\n',
  '\n',
  'Legal basis of processing\n',
  'The Owner may process Personal Data relating to Users if one of the following applies:\n',
  '\n',
  'Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;\n',
  'provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;\n',
  'processing is necessary for compliance with a legal obligation to which the Owner is subject;\n',
  'processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;\n',
  'processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.\n',
  'In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.\n',
  '\n',
  'Place\n',
  "The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.\n",
  '\n',
  "Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.\n",
  '\n',
  'Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.\n',
  '\n',
  'If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.\n',
  '\n',
  'Retention time\n',
  'Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.\n',
  '\n',
  'Therefore:\n',
  '\n',
  'Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.\n',
  'Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.\n',
  'The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.\n',
  '\n',
  'Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.\n',
  '\n',
  'The rights of Users\n',
  'Users may exercise certain rights regarding their Data processed by the Owner.\n',
  '\n',
  'In particular, Users have the right to do the following:\n',
  '\n',
  'Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.\n',
  'Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.\n',
  'Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.\n',
  'Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.\n',
  'Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.\n',
  'Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.\n',
  "Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.\n",
  'Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.\n',
  'Details about the right to object to processing\n',
  'Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.\n',
  '\n',
  'Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.\n',
  '\n',
  'How to exercise these rights\n',
  'Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.\n',
  '\n',
  'Cookie Policy\n',
  'This Application uses Trackers. To learn more, the User may consult the Cookie Policy.\n',
  '\n',
  'Additional information about Data collection and processing\n',
  'Legal action\n',
  "The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.\n",
  'The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.\n',
  '\n',
  "Additional information about User's Personal Data\n",
  'In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.\n',
  '\n',
  'System logs and maintenance\n',
  'For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.\n',
  '\n',
  'Information not contained in this policy\n',
  'More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.\n',
  '\n',
  'How “Do Not Track” requests are handled\n',
  'This Application does not support “Do Not Track” requests.\n',
  'To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.\n',
  '\n',
  'Changes to this privacy policy\n',
  'The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.\n',
  '\n',
  'Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.\n',
];