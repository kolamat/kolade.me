/* eslint-disable no-unused-vars */
import Typed from "react-typed";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import kolade from "../../assets/kolade.jpg";

const hero = () => {
  return (
    <div id="hero" className="mt-24 text-white bg-[#000300] pt-24 pb-16 px-1">
      <div className="md:mx-6 md:px-4 grid md:grid-cols-2">
        <div className="flex flex-col justify-center mx-3 space-y-2">
          <h1 className="font-bold text-3xl mt-4">Hello, it's me</h1>
          <h3 className=" font-bold py-2">
            {/* lg:text-[50px] md:text-5xl sm:text-4xl text-3xl */}
            <svg
              className="md:w-[339px]"
              id="logo"
              width="300"
              height="50"
              viewBox="0 0 1089 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              font-family="Bebas Neue"
            >
              {/* Letter K  */}
              <path
                d="M54.0434 109.423L55.3836 110.908H57.384H72.616H82.8456L75.9332 103.367L37.8715 61.8453L75.5678 20.2124L82.377 12.692H72.232H57.512H55.4954L54.1533 14.1972L25.148 46.7274V17.192V12.692H20.648H9H4.5V17.192V106.408V110.908H9H20.648H25.148V106.408V77.4065L54.0434 109.423Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter O  */}
              <path
                d="M96.0848 106.999L96.0982 107.006L96.1116 107.014C102.202 110.397 108.936 112.06 116.217 112.06C123.574 112.06 130.383 110.402 136.552 107.028C142.744 103.642 147.648 98.8301 151.211 92.6697C154.903 86.3509 156.685 79.1506 156.685 71.208C156.685 63.2937 154.958 56.1442 151.358 49.9067C147.886 43.7431 143.064 38.9566 136.938 35.645C130.846 32.2657 124.075 30.612 116.729 30.612C109.383 30.612 102.612 32.2657 96.5196 35.645C90.379 38.9648 85.5204 43.8011 81.9702 50.0379L81.9645 50.0478L81.9589 50.0578C78.4564 56.2846 76.773 63.3799 76.773 71.208C76.773 79.0924 78.401 86.2459 81.7909 92.5415L81.8106 92.578L81.8309 92.6142C85.2926 98.7682 90.0553 103.595 96.0848 106.999ZM132.944 83.2661L132.926 83.2978L132.907 83.3298C131.072 86.5767 128.724 88.8815 125.871 90.408C122.857 92.0196 119.662 92.82 116.217 92.82C112.753 92.82 109.662 92.0532 106.862 90.5589C104.211 89.0623 101.986 86.7918 100.221 83.5572C98.6027 80.4387 97.677 76.3868 97.677 71.208C97.677 66.1348 98.6375 62.1365 100.331 59.0208C102.1 55.7663 104.321 53.5454 106.953 52.1332L106.97 52.1241L106.986 52.1149C109.878 50.5314 113.055 49.724 116.601 49.724C120.045 49.724 123.182 50.5238 126.088 52.1149L126.124 52.1349L126.161 52.1542C128.891 53.5843 131.193 55.8261 133.035 59.0863C134.788 62.1875 135.781 66.1613 135.781 71.208C135.781 76.2279 134.757 80.1778 132.944 83.2661Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter L  */}
              <path
                d="M183.648 11.688V7.18802H179.148H167.5H163V11.688V106.408V110.908H167.5H179.148H183.648V106.408V11.688Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter A  */}
              <path
                d="M249.54 105.071C248.417 105.92 247.225 106.718 245.966 107.463L245.955 107.47L245.944 107.476C240.63 110.584 234.531 112.06 227.8 112.06C220.792 112.06 214.341 110.321 208.56 106.793C202.785 103.27 198.268 98.3337 195.013 92.1097C191.732 85.839 190.148 78.7926 190.148 71.08C190.148 63.301 191.725 56.2747 195.033 50.1398C198.298 43.9984 202.827 39.1514 208.608 35.7218L208.622 35.7133L208.637 35.705C214.48 32.2961 220.944 30.612 227.928 30.612C234.731 30.612 240.877 32.0823 246.2 35.1957M249.54 105.071L246.2 35.1957M249.54 105.071V106.408V110.908H254.04H265.816H270.316V106.408V36.264V31.764H265.816H254.04H249.54V36.264V37.3946M249.54 105.071V37.3946M246.2 35.1957C247.373 35.8819 248.487 36.6147 249.54 37.3946M246.2 35.1957L249.54 37.3946M239.834 52.2908L239.888 52.3229L239.943 52.3534C242.821 53.9598 245.133 56.3062 246.886 59.5328C248.6 62.687 249.54 66.5297 249.54 71.208C249.54 75.875 248.605 79.7721 246.877 83.0289C245.119 86.2552 242.795 88.6562 239.889 90.3493C237.026 91.9819 233.839 92.82 230.232 92.82C226.634 92.82 223.453 91.9858 220.595 90.3608C217.777 88.6748 215.483 86.2739 213.716 83.029C211.993 79.7819 211.052 75.8454 211.052 71.08C211.052 66.4017 211.992 62.559 213.706 59.4048C215.474 56.1513 217.762 53.8022 220.561 52.2031C223.427 50.565 226.619 49.724 230.232 49.724C233.811 49.724 236.977 50.5903 239.834 52.2908Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter D  */}
              <path
                d="M332.626 107.444C333.826 106.72 334.965 105.945 336.04 105.12V106.408V110.908H340.54H352.316H356.816V106.408V11.688V7.18802H352.316H340.54H336.04V11.688V37.5274C334.751 36.6041 333.374 35.7573 331.915 34.9863C326.554 32.0679 320.743 30.612 314.556 30.612C307.499 30.612 300.99 32.2905 295.137 35.705L295.122 35.7133L295.108 35.7218C289.327 39.1515 284.798 43.9985 281.533 50.14C278.225 56.2748 276.648 63.3011 276.648 71.08C276.648 78.7926 278.232 85.839 281.513 92.1098C284.768 98.3337 289.285 103.27 295.06 106.793L295.074 106.802L295.089 106.811C300.939 110.321 307.42 112.06 314.428 112.06C321.159 112.06 327.258 110.584 332.572 107.476L332.599 107.461L332.626 107.444ZM326.334 52.2908L326.388 52.3229L326.443 52.3534C329.321 53.9598 331.633 56.3062 333.386 59.5328C335.1 62.687 336.04 66.5297 336.04 71.208C336.04 75.875 335.105 79.7721 333.377 83.029C331.619 86.2551 329.295 88.656 326.389 90.3491C323.526 91.9819 320.339 92.82 316.732 92.82C313.134 92.82 309.953 91.9858 307.095 90.3607C304.277 88.6748 301.983 86.2738 300.215 83.0289C298.493 79.7818 297.552 75.8453 297.552 71.08C297.552 66.4017 298.492 62.559 300.206 59.4048C301.974 56.1513 304.262 53.8022 307.061 52.2031C309.927 50.565 313.119 49.724 316.732 49.724C320.311 49.724 323.477 50.5903 326.334 52.2908Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter E -*/}
              <path
                d="M435.616 80.188H439.674L440.092 76.1511C440.362 73.5407 440.5 71.0386 440.5 68.648C440.5 61.5809 438.942 55.1059 435.725 49.3386C432.588 43.4731 428.057 38.8573 422.219 35.5489C416.337 32.2161 409.666 30.612 402.336 30.612C394.836 30.612 388.002 32.2583 381.958 35.6673C375.971 39.007 371.316 43.832 368.026 50.0248C364.724 56.2402 363.148 63.3459 363.148 71.208C363.148 79.0924 364.776 86.2459 368.166 92.5415L368.173 92.5543L368.18 92.5672C371.549 98.7278 376.224 103.568 382.177 106.983L382.19 106.991L382.204 106.999C388.233 110.402 394.981 112.06 402.336 112.06C411.474 112.06 419.462 109.763 426.01 104.901L426.028 104.888L426.045 104.875C432.454 100.02 436.783 93.6834 438.927 85.9832L440.516 80.276H434.592H422.048H418.849L417.798 83.2977C416.745 86.3237 414.944 88.7073 412.309 90.5548C409.9 92.219 406.674 93.204 402.336 93.204C397.236 93.204 393.076 91.6499 389.605 88.601C387.314 86.4817 385.66 83.7364 384.761 80.188H435.616ZM417.174 57.1541L417.188 57.177L417.202 57.1997C418.009 58.4981 418.623 59.9916 419.007 61.716H385.056C386.012 58.4377 387.609 55.895 389.744 53.9326C393.054 50.9677 396.996 49.468 401.824 49.468C405.275 49.468 408.273 50.1816 410.907 51.5322L410.967 51.5634L411.029 51.5927C413.644 52.8349 415.666 54.6626 417.174 57.1541Z"
                stroke="white"
                stroke-width="9"
              />
              {/* SLASH SYMBOL */}
              <path
                d="M504.515 54.568V50.068H500.015H448.943H444.443V54.568V64.424V68.924H448.943H500.015H504.515V64.424V54.568Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter M  */}
              <path
                d="M616.871 17.832V13.332H612.371H599.955H597.039L595.848 15.9938L567.187 80.0323L538.526 15.9938L537.335 13.332H534.419H521.875H517.375V17.832V106.408V110.908H521.875H533.523H538.023V106.408V61.3345L558.982 108.244L560.173 110.908H563.091H571.283H574.204L575.393 108.24L596.223 61.5088V106.408V110.908H600.723H612.371H616.871V106.408V17.832Z"
                stroke="white"
                stroke-width="9"
              />
              {/* Letter A  */}
              <path
                d="M682.665 105.071C681.542 105.92 680.35 106.718 679.091 107.463L679.08 107.47L679.069 107.476C673.755 110.584 667.656 112.06 660.925 112.06C653.917 112.06 647.466 110.321 641.685 106.793C635.91 103.27 631.393 98.3337 628.138 92.1097C624.857 85.839 623.273 78.7926 623.273 71.08C623.273 63.301 624.85 56.2747 628.158 50.1398C631.423 43.9984 635.952 39.1514 641.733 35.7218L641.747 35.7133L641.762 35.705C647.605 32.2961 654.069 30.612 661.053 30.612C667.856 30.612 674.002 32.0823 679.325 35.1957M682.665 105.071L679.325 35.1957M682.665 105.071V106.408V110.908H687.165H698.941H703.441V106.408V36.264V31.764H698.941H687.165H682.665V36.264V37.3946M682.665 105.071V37.3946M679.325 35.1957C680.498 35.8819 681.612 36.6147 682.665 37.3946M679.325 35.1957L682.665 37.3946M672.959 52.2908L673.013 52.3229L673.068 52.3534C675.946 53.9598 678.258 56.3062 680.011 59.5328C681.725 62.687 682.665 66.5297 682.665 71.208C682.665 75.875 681.73 79.7721 680.001 83.0289C678.244 86.2552 675.92 88.6562 673.014 90.3493C670.151 91.9819 666.964 92.82 663.357 92.82C659.759 92.82 656.578 91.9858 653.72 90.3608C650.902 88.6748 648.608 86.2739 646.841 83.029C645.118 79.7819 644.177 75.8453 644.177 71.08C644.177 66.4017 645.117 62.559 646.831 59.4048C648.599 56.1513 650.887 53.8022 653.686 52.2031C656.552 50.565 659.744 49.724 663.357 49.724C666.936 49.724 670.102 50.5903 672.959 52.2908Z"
                stroke="white"
                stroke-width="9"
              />
              {/*  Letter T  */}
              <path
                d="M755.637 96.552V92.052H751.137H742.561C739.527 92.052 738.415 91.4723 738.142 91.2672C737.904 90.9792 737.333 89.9616 737.333 87.208V50.364H751.137H755.637V45.864V36.264V31.764H751.137H737.333V18.6V14.1H732.833H721.185H716.685V18.6V31.764H712.097H707.597V36.264V45.864V50.364H712.097H716.685V87.208C716.685 94.6107 718.428 101.027 723 105.238C727.392 109.283 733.55 110.908 740.641 110.908H751.137H755.637V106.408V96.552Z"
                stroke="white"
                stroke-width="9"
              />
              {/*  Letter A  */}
              <path
                d="M815.79 105.071C814.667 105.92 813.475 106.718 812.216 107.463L812.205 107.47L812.194 107.476C806.88 110.584 800.781 112.06 794.05 112.06C787.042 112.06 780.591 110.321 774.81 106.793C769.035 103.27 764.518 98.3337 761.263 92.1097C757.982 85.839 756.398 78.7926 756.398 71.08C756.398 63.301 757.975 56.2747 761.283 50.1398C764.548 43.9984 769.077 39.1514 774.858 35.7218L774.872 35.7133L774.887 35.705C780.73 32.2961 787.194 30.612 794.178 30.612C800.981 30.612 807.127 32.0823 812.45 35.1957M815.79 105.071L812.45 35.1957M815.79 105.071V106.408V110.908H820.29H832.066H836.566V106.408V36.264V31.764H832.066H820.29H815.79V36.264V37.3946M815.79 105.071V37.3946M812.45 35.1957C813.623 35.8819 814.737 36.6147 815.79 37.3946M812.45 35.1957L815.79 37.3946M806.084 52.2908L806.138 52.3229L806.193 52.3534C809.071 53.9598 811.383 56.3062 813.136 59.5328C814.85 62.687 815.79 66.5297 815.79 71.208C815.79 75.875 814.855 79.7721 813.126 83.0289C811.369 86.2552 809.045 88.6562 806.139 90.3493C803.276 91.9819 800.089 92.82 796.482 92.82C792.884 92.82 789.703 91.9858 786.845 90.3608C784.027 88.6748 781.733 86.2739 779.966 83.029C778.243 79.7819 777.302 75.8453 777.302 71.08C777.302 66.4017 778.242 62.559 779.956 59.4048C781.724 56.1513 784.012 53.8022 786.811 52.2031C789.677 50.565 792.869 49.724 796.482 49.724C800.061 49.724 803.227 50.5903 806.084 52.2908Z"
                stroke="white"
                stroke-width="9"
              />
              {/*  Letter N  */}
              <path
                d="M870.73 33.9031C869.745 34.3953 868.801 34.9328 867.898 35.5154V31.764H863.398H851.75H847.25V36.264V106.408V110.908H851.75H863.398H867.898V106.408V67.624C867.898 60.9856 869.513 56.6715 872.046 53.9455C874.73 51.1475 878.381 49.596 883.494 49.596C888.549 49.596 892.044 51.1198 894.538 53.7958L894.555 53.8147L894.573 53.8333C897.012 56.3911 898.578 60.4418 898.578 66.728V106.408V110.908H903.078H914.598H919.098V106.408V65.064C919.098 54.5323 916.217 45.7852 909.805 39.5712C903.547 33.4215 895.442 30.484 885.926 30.484C880.511 30.484 875.433 31.6011 870.764 33.886L870.747 33.8945L870.73 33.9031Z"
                stroke="white"
                stroke-width="9"
              />
              {/*  Letter M  */}
              <path
                d="M993.072 41.7632C995.111 39.1883 997.607 37.0028 1000.55 35.2277C1005.81 32.0518 1011.65 30.484 1017.98 30.484C1024.08 30.484 1029.68 31.7736 1034.68 34.4638C1039.78 37.1244 1043.76 41.1563 1046.63 46.392C1049.55 51.7265 1050.89 58.0149 1050.89 65.064V106.408V110.908H1046.39H1034.87H1030.37V106.408V66.728C1030.37 60.4418 1028.81 56.3911 1026.37 53.8333L1026.33 53.7946L1026.3 53.755C1023.87 51.0919 1020.52 49.596 1015.67 49.596C1010.68 49.596 1007.14 51.1616 1004.53 54.0182L1004.52 54.0364L1004.5 54.0544C1001.96 56.7794 1000.33 61.0981 1000.33 67.752V106.408V110.908H995.833H984.313H979.813V106.408V66.728C979.813 60.4418 978.247 56.3911 975.808 53.8333L975.771 53.7946L975.735 53.755C973.314 51.0919 969.956 49.596 965.113 49.596C960.124 49.596 956.58 51.1616 953.972 54.0182L953.955 54.0364L953.939 54.0544C951.395 56.7794 949.773 61.0981 949.773 67.752V106.408V110.908H945.273H933.625H929.125V106.408V36.264V31.764H933.625H945.273H949.773V35.4688C950.625 34.9104 951.515 34.3943 952.441 33.9211L952.459 33.912L952.476 33.9031C957.07 31.6065 962.075 30.484 967.417 30.484C974.002 30.484 980.011 31.9711 985.305 35.0677M993.072 41.7632L985.305 35.0677M993.072 41.7632C990.929 39.0859 988.34 36.8428 985.305 35.0677M993.072 41.7632L983.033 38.952L985.305 35.0677"
                stroke="white"
                stroke-width="9"
              />
              {/*  Letter I  */}
              <path
                d="M1081.65 36.264V31.764H1077.15H1065.5H1061V36.264V106.408V110.908H1065.5H1077.15H1081.65V106.408V36.264ZM1062.7 25.75C1065.1 28.1499 1068.13 29.372 1071.52 29.372C1074.85 29.372 1077.82 28.12 1080.12 25.7046C1082.49 23.3119 1083.7 20.2982 1083.7 16.936C1083.7 13.5738 1082.49 10.5601 1080.12 8.16739C1077.82 5.75197 1074.85 4.5 1071.52 4.5C1068.13 4.5 1065.1 5.72211 1062.7 8.12202C1060.3 10.522 1059.08 13.5525 1059.08 16.936C1059.08 20.3195 1060.3 23.35 1062.7 25.75Z"
                stroke="white"
                stroke-width="9"
              />
            </svg>
          </h3>
          <h4 className=" text-[23px] font-bold">
            I'm a{" "}
            <span className="capitalize text-[#0ef] underline">
              frontend engineer
            </span>
            <p>
              specialized in{" "}
              <span className="capitalize text-[#E1986F]">
                {" "}
                <Typed
                  strings={[
                    "html5",
                    "css3",
                    "vanilla-Javascript",
                    "react-Js",
                    "next-Js",
                  ]}
                  startDelay={5000}
                  typeSpeed={70}
                  backSpeed={150}
                  cursorChar={"."}
                  loop={false}
                  shuffle={false}
                />
              </span>
            </p>
          </h4>
          <h4 className=" text-[23px] underline text-blue-400 font-bold">
            A little speech about my-seif
          </h4>
          {/* <p className="text-[20px] font-bold">
            I Talk to people the way I want to be spoken to respect people as I
            wish to be respected. My status, religion, race, political views, or
            culture don't matter being a good person really is as simple as
            following the golden rule and treating others as I would like them
            to treat Me.
          </p> */}
          <div className="flex gap-5 my-5">
            <a
              className="rounded-full bg-[#0ef] p-2 text-black hover:text-white hover:bg-slate-900 hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1"
              href="https://twitter.com/koladeMOK"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black hover:text-white hover:bg-slate-900 hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1"
              href="https://www.facebook.com/kolade.matanmi.92"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black hover:text-white hover:bg-slate-900 hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1"
              href="https://www.instagram.com/matiness200/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black hover:text-white hover:bg-slate-900 hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1"
              href="https://www.linkedin.com/in/kolade-matanmi-a695792a3/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black hover:text-white hover:bg-slate-900 hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1"
              href="https://github.com/kolamat"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <a
            className=" font-bold w-[98px] rounded-lg bg-[#0ef] p-1 text-xl text-center text-black hover:text-white hover:bg-slate-900 hover:transition-[5s,ease-in] hover:bg-opacity-100 hover:translate-x-2"
            //   kolamat.github.io/resuming/
            href="#home"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
        <img
          className="w-[310px] lg:w-[500px] lg:mx-4 mx-auto my-4 rounded-2xl lg:place-self-end place-self-center"
          src={kolade}
          alt="Kolade"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default hero;
