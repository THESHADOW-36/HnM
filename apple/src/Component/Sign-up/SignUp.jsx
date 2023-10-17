import React from "react";
import "./SignUp.css"
import Navbar3 from "../Header/Navbar3";

const SignUp = () => {
   return (
      <>
         <Navbar3 />

         <div className="sign-up">
            <div className="su-apple-id-bg">
               <div className="su-apple-id">
                  <p>Apple ID</p>
                  <div className="su-scf">
                     <p>Sign In</p>
                     <p>Create Your Apple ID</p>
                     <p>FAQ</p>
                  </div>
               </div>
            </div>

            <div className="su-create-ur-id-layout">
               <p className="su-create-ur-id-text">Create Your Apple ID</p>
               <p className="su-apple-id-text">One Apple ID is all you need to access all Apple services.</p>

               <div className="su-username">
                  <div className="su-first-name"><input type="text" placeholder="first name" /></div>
                  <div className="su-last-name"><input type="text" placeholder="last name" /></div>
               </div>

               <p className="su-country-dob">COUNTRY / REGION</p>
               <div className="su-country-region-box">
                  <div className="su-option-box">
                     <select>
                        <option value="India">India</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="America">America</option>
                        <option value="Austria">Austria</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Japan">Japan</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Russia">Russia</option>
                        <option value="Thailand">Thailand</option>
                     </select>
                  </div>

                  <div className="su-input-box"><input type="text" placeholder="Date of birth" /></div>
               </div>
            </div>

            <div className="su-vertical-line-layout"><div className="su-vertical-line"></div></div>

            <div className="su-create-ur-id-layout">
               <div className="su-input-box"><input type="text" placeholder="name@example.com" /></div>
               <p className="su-new-apple-id">This will be your new Apple ID.</p>
               <div className="su-input-box"><input type="text" placeholder="password" /></div>
               <div className="su-input-box"><input type="text" placeholder="confirm password" /></div>
            </div>

            <div className="su-vertical-line-layout"><div className="su-vertical-line"></div></div>

            <div className="su-create-ur-id-layout">
               <div className="su-gap"></div>
               <div className="su-option-box">
                  <select>
                     <option value="IN">+91 (India)</option>
                     <option value="AF">+93 (Afghanistan)</option>
                     <option value="AX">+358 (Åland Islands)</option>
                     <option value="AL">+355 (Albania)</option>
                     <option value="DZ">+213 (Algeria)</option>
                     <option value="AS">+1 (American Samoa)</option>
                     <option value="AD">+376 (Andorra)</option>
                     <option value="AO">+244 (Angola)</option>
                     <option value="AI">+1 (Anguilla)</option>
                     <option value="AQ">+672 (Antarctica)</option>
                     <option value="AG">+1 (Antigua &amp; Barbuda)</option>
                     <option value="AR">+54 (Argentina)</option>
                     <option value="AM">+374 (Armenia)</option>
                     <option value="AW">+297 (Aruba)</option>
                     <option value="AU">+61 (Australia)</option>
                     <option value="AT">+43 (Austria)</option>
                     <option value="AZ">+994 (Azerbaijan)</option>
                     <option value="BS">+1 (Bahamas)</option>
                     <option value="BH">+973 (Bahrain)</option>
                     <option value="BD">+880 (Bangladesh)</option>
                     <option value="BB">+1 (Barbados)</option>
                     <option value="BY">+375 (Belarus)</option>
                     <option value="BE">+32 (Belgium)</option>
                     <option value="BZ">+501 (Belize)</option>
                     <option value="BJ">+229 (Benin)</option>
                     <option value="BM">+1 (Bermuda)</option>
                     <option value="BT">+975 (Bhutan)</option>
                     <option value="BO">+591 (Bolivia)</option>
                     <option value="BA">+387 (Bosnia &amp; Herzegovina)</option>
                     <option value="BW">+267 (Botswana)</option>
                     <option value="BV">+47 (Bouvet Island)</option>
                     <option value="BR">+55 (Brazil)</option>
                     <option value="VG">+1 (British Virgin Islands)</option>
                     <option value="BN">+673 (Brunei)</option>
                     <option value="BG">+359 (Bulgaria)</option>
                     <option value="BF">+226 (Burkina Faso)</option>
                     <option value="BI">+257 (Burundi)</option>
                     <option value="KH">+855 (Cambodia)</option>
                     <option value="CM">+237 (Cameroon)</option>
                     <option value="CA">+1 (Canada)</option>
                     <option value="CV">+238 (Cape Verde)</option>
                     <option value="BQ">+599 (Caribbean Netherlands)</option>
                     <option value="KY">+1 (Cayman Islands)</option>
                     <option value="CF">+236 (Central African Republic)</option>
                     <option value="TD">+235 (Chad)</option>
                     <option value="IO">+246 (Chagos Archipelago)</option>
                     <option value="CL">+56 (Chile)</option>
                     <option value="CN">+86 (China mainland)</option>
                     <option value="CX">+61 (Christmas Island)</option>
                     <option value="CC">+61 (Cocos (Keeling)Islands)</option>
                     <option value="CO">+57 (Colombia)</option>
                     <option value="KM">+269 (Comoros)</option>
                     <option value="CK">+682 (Cook Islands)</option>
                     <option value="CR">+506 (Costa Rica)</option>
                     <option value="CI">+225 (Côte d’Ivoire)</option>
                     <option value="HR">+385 (Croatia)</option>
                     <option value="CW">+599 (Curaçao)</option>
                     <option value="CY">+357 (Cyprus)</option>
                     <option value="CZ">+420 (Czechia)</option>
                     <option value="CD">+243 (Democratic Republic of the Congo)</option>
                     <option value="DK">+45 (Denmark)</option>
                     <option value="DJ">+253 (Djibouti)</option>
                     <option value="DM">+1 (Dominica)</option>
                     <option value="DO">+1 (Dominican Republic)</option>
                     <option value="EC">+593 (Ecuador)</option>
                     <option value="EG">+20 (Egypt)</option>
                     <option value="SV">+503 (El Salvador)</option>
                     <option value="GQ">+240 (Equatorial Guinea)</option>
                     <option value="ER">+291 (Eritrea)</option>
                     <option value="EE">+372 (Estonia)</option>
                     <option value="SZ">+268 (Eswatini)</option>
                     <option value="ET">+251 (Ethiopia)</option>
                     <option value="FK">+500 (Falkland Islands)</option>
                     <option value="FO">+298 (Faroe Islands)</option>
                     <option value="FJ">+679 (Fiji)</option>
                     <option value="FI">+358 (Finland)</option>
                     <option value="FR">+33 (France)</option>
                     <option value="GF">+594 (French Guiana)</option>
                     <option value="PF">+689 (French Polynesia)</option>
                     <option value="TF">+262 (French Southern Territories)</option>
                     <option value="GA">+241 (Gabon)</option>
                     <option value="GM">+220 (Gambia)</option>
                     <option value="GE">+995 (Georgia)</option>
                     <option value="DE">+49 (Germany)</option>
                     <option value="GH">+233 (Ghana)</option>
                     <option value="GI">+350 (Gibraltar)</option>
                     <option value="GR">+30 (Greece)</option>
                     <option value="GL">+299 (Greenland)</option>
                     <option value="GD">+1 (Grenada)</option>
                     <option value="GP">+590 (Guadeloupe)</option>
                     <option value="GU">+1 (Guam)</option>
                     <option value="GT">+502 (Guatemala)</option>
                     <option value="GG">+44 (Guernsey)</option>
                     <option value="GN">+224 (Guinea)</option>
                     <option value="GW">+245 (Guinea-Bissau)</option>
                     <option value="GY">+592 (Guyana)</option>
                     <option value="HT">+509 (Haiti)</option>
                     <option value="HM">+61 (Heard &amp; Mc Donald Islands)</option>
                     <option value="HN">+504 (Honduras)</option>
                     <option value="HK">+852 (Hong Kong)</option>
                     <option value="HU">+36 (Hungary)</option>
                     <option value="IS">+354 (Iceland)</option>
                     <option value="ID">+62 (Indonesia)</option>
                     <option value="IQ">+964 (Iraq)</option>
                     <option value="IE">+353 (Ireland)</option>
                     <option value="IM">+44 (Isle of Man)</option>
                     <option value="IL">+972 (Israel)</option>
                     <option value="IT">+39 (Italy)</option>
                     <option value="JM">+1 (Jamaica)</option>
                     <option value="JP">+81 (Japan)</option>
                     <option value="JE">+44 (Jersey)</option>
                     <option value="JO">+962 (Jordan)</option>
                     <option value="KZ">+7 (Kazakhstan)</option>
                     <option value="KE">+254 (Kenya)</option>
                     <option value="KI">+686 (Kiribati)</option>
                     <option value="XK">+383 (Kosovo)</option>
                     <option value="KW">+965 (Kuwait)</option>
                     <option value="KG">+996 (Kyrgyzstan)</option>
                     <option value="LA">+856 (Laos)</option>
                     <option value="LV">+371 (Latvia)</option>
                     <option value="LB">+961 (Lebanon)</option>
                     <option value="LS">+266 (Lesotho)</option>
                     <option value="LR">+231 (Liberia)</option>
                     <option value="LY">+218 (Libya)</option>
                     <option value="LI">+423 (Liechtenstein)</option>
                     <option value="LT">+370 (Lithuania)</option>
                     <option value="LU">+352 (Luxembourg)</option>
                     <option value="MO">+853 (Macao)</option>
                     <option value="MG">+261 (Madagascar)</option>
                     <option value="MW">+265 (Malawi)</option>
                     <option value="MY">+60 (Malaysia)</option>
                     <option value="MV">+960 (Maldives)</option>
                     <option value="ML">+223 (Mali)</option>
                     <option value="MT">+356 (Malta)</option>
                     <option value="MH">+692 (Marshall Islands)</option>
                     <option value="MQ">+596 (Martinique)</option>
                     <option value="MR">+222 (Mauritania)</option>
                     <option value="MU">+230 (Mauritius)</option>
                     <option value="YT">+262 (Mayotte)</option>
                     <option value="MX">+52 (Mexico)</option>
                     <option value="FM">+691 (Micronesia)</option>
                     <option value="MD">+373 (Moldova)</option>
                     <option value="MC">+377 (Monaco)</option>
                     <option value="MN">+976 (Mongolia)</option>
                     <option value="ME">+382 (Montenegro)</option>
                     <option value="MS">+1 (Montserrat)</option>
                     <option value="MA">+212 (Morocco)</option>
                     <option value="MZ">+258 (Mozambique)</option>
                     <option value="MM">+95 (Myanmar)</option>
                     <option value="NA">+264 (Namibia)</option>
                     <option value="NR">+674 (Nauru)</option>
                     <option value="NP">+977 (Nepal)</option>
                     <option value="NL">+31 (Netherlands)</option>
                     <option value="NC">+687 (New Caledonia)</option>
                     <option value="NZ">+64 (New Zealand)</option>
                     <option value="NI">+505 (Nicaragua)</option>
                     <option value="NE">+227 (Niger)</option>
                     <option value="NG">+234 (Nigeria)</option>
                     <option value="NU">+683 (Niue)</option>
                     <option value="MP">+1 (Northern Mariana Islands)</option>
                     <option value="MK">+389 (North Macedonia)</option>
                     <option value="NO">+47 (Norway)</option>
                     <option value="OM">+968 (Oman)</option>
                     <option value="PK">+92 (Pakistan)</option>
                     <option value="PW">+680 (Palau)</option>
                     <option value="PS">+970 (Palestinian Territories)</option>
                     <option value="PA">+507 (Panama)</option>
                     <option value="PG">+675 (Papua New Guinea)</option>
                     <option value="PY">+595 (Paraguay)</option>
                     <option value="PE">+51 (Peru)</option>
                     <option value="PH">+63 (Philippines)</option>
                     <option value="PN">+870 (Pitcairn Island)</option>
                     <option value="PL">+48 (Poland)</option>
                     <option value="PT">+351 (Portugal)</option>
                     <option value="PR">+1 (Puerto Rico)</option>
                     <option value="QA">+974 (Qatar)</option>
                     <option value="CG">+242 (Republic of the Congo)</option>
                     <option value="RE">+262 (Réunion)</option>
                     <option value="RO">+40 (Romania)</option>
                     <option value="RU">+7 (Russia)</option>
                     <option value="RW">+250 (Rwanda)</option>
                     <option value="KN">+1 (Saint Kitts &amp; Nevis)</option>
                     <option value="WS">+685 (Samoa)</option>
                     <option value="SM">+378 (San Marino)</option>
                     <option value="ST">+239 (Sao Tome &amp; Principe)</option>
                     <option value="SA">+966 (Saudi Arabia)</option>
                     <option value="SN">+221 (Senegal)</option>
                     <option value="RS">+381 (Serbia)</option>
                     <option value="SC">+248 (Seychelles)</option>
                     <option value="SL">+232 (Sierra Leone)</option>
                     <option value="SG">+65 (Singapore)</option>
                     <option value="SX">+1 (Sint Maarten)</option>
                     <option value="SK">+421 (Slovakia)</option>
                     <option value="SI">+386 (Slovenia)</option>
                     <option value="SB">+677 (Solomon Islands)</option>
                     <option value="SO">+252 (Somalia)</option>
                     <option value="ZA">+27 (South Africa)</option>
                     <option value="KR">+82 (South Korea)</option>
                     <option value="SS">+211 (South Sudan)</option>
                     <option value="ES">+34 (Spain)</option>
                     <option value="LK">+94 (Sri Lanka)</option>
                     <option value="PM">+508 (St. Pierre &amp; Miquelon)</option>
                     <option value="BL">+590 (St Barthélemy)</option>
                     <option value="SH">+290 (St Helena)</option>
                     <option value="LC">+1 (St Lucia)</option>
                     <option value="MF">+1 (St Martin)</option>
                     <option value="VC">+1 (St Vincent &amp; the Grenadines)</option>
                     <option value="SD">+249 (Sudan)</option>
                     <option value="SR">+597 (Suriname)</option>
                     <option value="SJ">+47 (Svalbard &amp; Jan Mayen Islands)</option>
                     <option value="SE">+46 (Sweden)</option>
                     <option value="CH">+41 (Switzerland)</option>
                     <option value="TW">+886 (Taiwan)</option>
                     <option value="TJ">+992 (Tajikistan)</option>
                     <option value="TZ">+255 (Tanzania)</option>
                     <option value="TH">+66 (Thailand)</option>
                     <option value="TL">+670 (Timor-Leste)</option>
                     <option value="TG">+228 (Togo)</option>
                     <option value="TK">+690 (Tokelau)</option>
                     <option value="TO">+676 (Tonga)</option>
                     <option value="TT">+1 (Trinidad &amp; Tobago)</option>
                     <option value="TN">+216 (Tunisia)</option>
                     <option value="TR">+90 (Türkiye)</option>
                     <option value="TM">+993 (Turkmenistan)</option>
                     <option value="TC">+1 (Turks &amp; Caicos Islands)</option>
                     <option value="TV">+688 (Tuvalu)</option>
                     <option value="UG">+256 (Uganda)</option>
                     <option value="UA">+380 (Ukraine)</option>
                     <option value="AE">+971 (United Arab Emirates)</option>
                     <option value="GB">+44 (United Kingdom)</option>
                     <option value="US">+1 (United States)</option>
                     <option value="UY">+598 (Uruguay)</option>
                     <option value="UZ">+998 (Uzbekistan)</option>
                     <option value="VU">+678 (Vanuatu)</option>
                     <option value="VA">+39 (Vatican City)</option>
                     <option value="VE">+58 (Venezuela)</option>
                     <option value="VN">+84 (Vietnam)</option>
                     <option value="VI">+1 (Virgin Islands (U.S.)</option>
                     <option value="WF">+681 (Wallis &amp; Futuna Islands)</option>
                     <option value="EH">+212 (Western Sahara)</option>
                     <option value="YE">+967 (Yemen)</option>
                     <option value="ZM">+260 (Zambia)</option>
                     <option value="ZW">+263 (Zimbabwe)</option>

                  </select>
               </div>

               <div className="su-input-box"><input type="number" placeholder="phone number" min={0} /></div>
               <p className="messaging-data-rates">Make sure you enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</p>

               <div className="su-messaging-verify">
                  <p>Verify with a:</p>
                  <div className="su-radio">
                     <input type="radio" />
                     <p>Text message</p>
                  </div>
                  <div className="su-radio">
                     <input type="radio" />
                     <p>Phone call</p>
                  </div>
               </div>
            </div>

            <div className="su-vertical-line-layout"><div className="su-vertical-line"></div></div>

            <div className="su-create-ur-id-layout">
               <div className="su-announcements-apps">
                  
                  <div className="su-announcements">
                     <input type="checkbox" />
                     <div className="su-announcements-text">
                        <p>Announcements</p>
                        <p>Receive Apple emails and communications including announcements, marketing, recommendations and updates about Apple products, services and software.</p>
                     </div>
                  </div>

                  <div className="su-apps">
                     <input type="checkbox" />
                     <div className="su-apps-text">
                        <p>Apps, Music, TV and More</p>
                        <p>Receive Apple emails and communications including new releases, exclusive content, special offers and marketing, and recommendations for apps, music, movies, TV, books, podcasts and more.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="su-footer">

            </div>
         </div >


      </>
   )
}

export default SignUp;