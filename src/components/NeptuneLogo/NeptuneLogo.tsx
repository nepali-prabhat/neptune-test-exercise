import styles from "./neptuneLogo.module.css";

const rate = 5;
const width = 1158 / rate;
const height = 190 / rate;

export default function NeptuneLogo() {
  return (
    <svg
      width={width}
      height={height}
      className={styles.logo}
      viewBox="0 0 888 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="neptune-logo-title neptune-logo-desc"
      role="img"
    >
      <title id="neptune-logo-title">Neptune Mutual logo</title>
      <desc id="neptune-logo-desc">
        A circle with a head of wise looking king inside. It has Neptune Mutual
        written on the side.
      </desc>
      <g clip-path="url(#clip0_127_112)">
        <path
          d="M72.0146 3.24507C85.6159 3.24507 98.9118 7.27795 110.221 14.8337C121.53 22.3895 130.344 33.1288 135.549 45.6936C140.754 58.2584 142.116 72.0844 139.463 85.4231C136.809 98.7618 130.26 111.014 120.642 120.631C111.024 130.248 98.7708 136.797 85.4308 139.45C72.0909 142.103 58.2636 140.741 45.6976 135.537C33.1316 130.332 22.3913 121.519 14.8348 110.211C7.2783 98.9028 3.24503 85.6082 3.24503 72.0081C3.26222 53.7763 10.5131 36.2961 23.4061 23.4043C36.2992 10.5124 53.781 3.26226 72.0146 3.24507V3.24507ZM72.0146 1.82885e-06C57.7707 -0.0032074 43.8457 4.21727 32.0008 12.1277C20.1559 20.0381 10.923 31.2831 5.4699 44.4406C0.0167714 57.598 -1.41168 72.077 1.3652 86.0463C4.14208 100.016 10.9996 112.848 21.0704 122.92C31.1412 132.992 43.973 139.852 57.943 142.631C71.9129 145.411 86.3936 143.986 99.5535 138.536C112.713 133.087 123.962 123.857 131.875 112.015C139.789 100.173 144.013 86.2507 144.013 72.0081C144.013 52.9132 136.428 34.6001 122.926 21.0964C109.424 7.59275 91.1113 0.00430443 72.0146 1.82885e-06V1.82885e-06Z"
          className={styles.logoCircle}
          display={"none"}
          fill="white"
        />

        <path
          d="M94.5628 189.473C146.788 189.473 189.126 147.058 189.126 94.7367C189.126 42.4151 146.788 0 94.5628 0C42.3372 0 0 42.4151 0 94.7367C0 147.058 42.3372 189.473 94.5628 189.473Z"
          className={styles.logoDisc}
          fill={"#01052D"}
        />
        <path
          d="M50.3036 42.7214C57.4065 40.4354 64.8296 39.3014 72.2911 39.3627C79.5507 39.3274 86.7715 40.4222 93.6943 42.6078L94.0513 41.9912C94.6517 40.9203 95.2359 39.8981 95.8038 38.8597L102.96 26.4149L89.524 29.806L91.958 31.1202C92.5799 31.4322 93.0665 31.9604 93.3264 32.6057C93.5864 33.251 93.6018 33.969 93.3698 34.6249C93.0956 35.2864 92.575 35.8154 91.9179 36.1C91.2607 36.3846 90.5187 36.4026 89.8486 36.1501C86.0746 34.6453 82.1283 33.6153 78.1003 33.0835C77.4626 32.9858 76.8816 32.6612 76.4642 32.1693C76.0468 31.6774 75.8211 31.0513 75.8285 30.4063C75.8285 29.6102 76.1448 28.8467 76.7078 28.2838C77.2708 27.7209 78.0343 27.4046 78.8305 27.4046H80.7615L71.9503 16.485L63.1229 27.4046H65.0539C65.4508 27.3917 65.8464 27.4576 66.2177 27.5985C66.5889 27.7395 66.9285 27.9528 67.2168 28.2259C67.5051 28.4991 67.7363 28.8267 67.897 29.1898C68.0578 29.553 68.1448 29.9444 68.1532 30.3414C68.1607 30.9864 67.9349 31.6125 67.5175 32.1044C67.1001 32.5962 66.5191 32.9209 65.8814 33.0186C61.5147 33.5738 57.2482 34.7428 53.2082 36.4908H52.9811C52.3337 36.3607 51.7415 36.0363 51.2834 35.5608C50.8253 35.0854 50.5231 34.4815 50.4172 33.8299C50.3624 33.2904 50.4707 32.7468 50.7282 32.2695C50.9856 31.7922 51.3804 31.4032 51.8614 31.1527L54.4577 29.7411L41.0381 26.35L48.1455 38.7624C48.8594 40.1091 49.6221 41.3909 50.3036 42.7214Z"
          fill="white"
        />
        <path
          d="M77.5806 94.4965C76.7069 93.9503 75.7341 93.5817 74.7178 93.4119C73.7015 93.2421 72.6616 93.2743 71.6578 93.5067C70.6522 93.2629 69.6078 93.2249 68.5872 93.395C67.5665 93.565 66.5909 93.9397 65.7188 94.4965C67.6791 95.1629 69.7205 95.5613 71.7876 95.6809C73.7661 95.5711 75.7178 95.1721 77.5806 94.4965V94.4965Z"
          fill="white"
        />
        <path
          d="M82.6277 106.86C83.4743 105.727 84.0715 104.428 84.3802 103.047C84.5781 101.296 84.1342 99.5316 83.1307 98.0823C82.5075 97.1334 81.5807 96.424 80.502 96.0703C79.9483 95.8747 79.4065 95.6472 78.8793 95.3888C77.9311 96.2995 76.8121 97.0134 75.5867 97.4896C74.3613 97.9658 73.0537 98.1948 71.7394 98.1634C69.013 98.146 66.3678 97.2339 64.2102 95.5673C63.8207 95.7296 63.415 95.8756 62.9931 96.0216C62.3396 96.2559 61.7465 96.6328 61.2569 97.125C60.5291 97.9422 59.9743 98.8983 59.6257 99.9356C59.2771 100.973 59.142 102.07 59.2285 103.161C59.5372 104.541 60.1344 105.841 60.981 106.974C61.7855 108.032 62.332 109.264 62.5771 110.571C62.8222 111.878 62.7591 113.224 62.3927 114.502C62.2189 114.997 61.9903 115.47 61.7112 115.914C62.4955 116.996 63.4051 117.982 64.4211 118.851C66.2683 120.623 68.6332 121.76 71.1715 122.096C70.942 121.849 70.7953 121.536 70.7516 121.202C70.708 120.867 70.7697 120.528 70.9281 120.23C71.1024 119.947 71.3093 119.686 71.5447 119.451C72.4534 118.348 73.9787 116.579 73.4433 114.924L73.2648 114.324L73.8002 114.665C73.8002 114.665 75.2931 115.768 73.5082 119.662C73.2713 120.092 73.1299 120.569 73.0935 121.059C73.0571 121.549 73.1266 122.041 73.2972 122.501C73.6916 123.334 74.379 123.993 75.2282 124.351C75.358 123.248 76.1045 119.483 79.074 119.483C80.5958 119.317 82.0069 118.609 83.0496 117.488C81.8962 115.974 81.237 114.142 81.1615 112.241C81.086 110.339 81.5979 108.461 82.6277 106.86V106.86Z"
          fill="white"
        />
        <path
          d="M81.9297 84.6639L79.5119 82.4897C79.5119 82.9602 79.0576 83.5443 78.0191 84.1122L77.7107 84.2907C76.0363 85.1612 74.2512 85.7999 72.4046 86.1891C71.9362 86.2535 71.4612 86.2535 70.9928 86.1891H70.6521C68.9017 85.8106 67.2098 85.1994 65.6217 84.3718C64.0964 83.5606 63.7556 82.7493 63.7556 82.2463C63.285 82.6844 62.7333 83.2523 62.1329 83.8688C60.5102 85.4914 58.4494 87.4871 56.5509 89.1096C52.8349 92.3547 50.7741 103.096 52.1209 108.223C52.666 110.021 53.5901 111.68 54.8308 113.091C56.0803 114.713 57.1675 116.174 56.6158 117.958C56.5048 118.218 56.4573 118.501 56.477 118.783C56.4967 119.065 56.5833 119.339 56.7294 119.581C57.6161 120.667 58.8789 121.379 60.2668 121.577C59.3419 120.846 57.557 118.542 59.5529 114.08C60.2182 112.101 59.5529 110.949 58.2385 108.872C57.1232 107.361 56.3583 105.621 55.9992 103.777C55.1716 98.277 60.0397 94.107 60.2019 93.9935C60.3642 93.8799 60.7861 93.2471 61.2567 93.1822C62.8794 92.9713 65.6217 90.3103 68.0071 91.1865C69.1436 91.6228 70.3442 91.8695 71.5608 91.9166V91.9166C71.6415 91.9284 71.7235 91.9284 71.8042 91.9166C71.9607 91.9311 72.1182 91.9311 72.2747 91.9166C73.3281 91.8518 74.3639 91.6162 75.3416 91.2189C77.6783 90.3428 80.7939 93.1011 82.4815 93.312C82.6621 93.3369 82.8342 93.4043 82.9837 93.5086C83.1333 93.613 83.2559 93.7514 83.3415 93.9123L83.5037 94.0908C84.3962 94.8859 88.2907 98.715 87.5929 103.55C87.2338 105.394 86.4688 107.134 85.3536 108.645C84.8391 109.435 84.5029 110.328 84.3684 111.261C84.2339 112.194 84.3043 113.145 84.5747 114.048C84.691 114.416 84.7885 114.79 84.8668 115.168C84.8668 115.168 84.8668 115.168 84.8668 115.265C85.1947 116.279 85.2364 117.364 84.9873 118.4C84.7382 119.437 84.208 120.384 83.4551 121.138L83.163 121.431C84.502 121.218 85.7155 120.519 86.5706 119.467C86.7232 119.228 86.8149 118.955 86.8375 118.672C86.8601 118.389 86.8131 118.105 86.7004 117.845C86.1325 116.092 87.2197 114.6 88.4692 112.977C89.72 111.571 90.6502 109.91 91.1953 108.11C92.5259 102.982 90.4651 92.2574 86.7654 88.9961C85.2238 87.7629 83.4875 86.108 81.9297 84.6639Z"
          fill="white"
        />
        <path
          d="M99.5846 87.049C99.5916 86.7752 99.6297 86.503 99.6982 86.2377C99.6982 86.2377 99.6982 86.2378 99.6982 86.1242C99.9151 85.1538 100.04 84.165 100.071 83.1712C100.112 81.3869 99.8992 79.6059 99.4385 77.8817C99.0449 76.444 98.501 75.0518 97.8158 73.728V73.728C96.5246 75.8089 95.3805 77.9776 94.392 80.2181C93.5425 82.1038 92.8899 84.0721 92.4447 86.0917C92.1979 87.1235 92.0619 88.1788 92.0391 89.2394C92.1272 91.5854 92.7428 93.8814 93.8402 95.9567C95.5426 99.0247 96.0456 102.615 95.252 106.033C96.586 104.659 97.4806 102.919 97.8216 101.035C98.1626 99.1508 97.9347 97.2078 97.1668 95.4538C97.7688 95.6069 98.3067 95.947 98.7032 96.4252C99.0998 96.9033 99.3345 97.4948 99.3736 98.1147C100.086 97.5134 100.665 96.7697 101.073 95.9314C101.481 95.0931 101.709 94.1788 101.743 93.2471C101.793 91.9561 101.391 90.6879 100.607 89.6613C99.9803 88.9313 99.6199 88.0104 99.5846 87.049V87.049Z"
          fill="white"
        />
        <path
          d="M44.9971 68.5034C45.2988 68.4028 45.5918 68.278 45.8734 68.1302C45.9364 68.0802 46.0079 68.0418 46.0843 68.0167V68.0167C46.1778 67.9745 46.2651 67.92 46.344 67.8544C50.5467 64.8203 51.212 53.9006 55.5446 51.1261C57.2479 49.884 59.177 48.9857 61.224 48.4813C62.2591 48.1758 63.2227 47.6668 64.0586 46.9842C64.8945 46.3016 65.5858 45.4592 66.0921 44.5061C59.473 45.0227 52.9913 46.669 46.9281 49.3737C46.4251 50.1363 45.3054 51.7913 44.6726 52.6188C42.6442 55.3609 40.3238 58.4437 39.8045 62.0457C40.6923 61.7771 41.5077 61.3112 42.1899 60.6828L42.6929 60.3259L42.5306 60.9262C42.1784 62.3335 41.6893 63.703 41.0702 65.015C39.7196 68.1233 39.3297 71.5645 39.9506 74.8962C40.1381 76.3076 40.4145 77.7058 40.7781 79.0824C40.7781 78.8065 40.8755 78.4658 40.9404 78.1251C40.9404 77.4436 41.0378 76.6648 41.1514 75.8211C41.5246 72.8356 42.5469 69.3634 44.9971 68.5034Z"
          fill="white"
        />
        <path
          d="M100.802 60.9262L100.607 60.3259L101.094 60.6828C102.068 61.3795 103.171 61.8758 104.339 62.1431C103.755 58.7033 101.288 55.653 99.0978 52.9433C98.3117 51.7625 97.6225 50.5199 97.037 49.2277C90.7737 46.4597 84.0731 44.8122 77.2402 44.3601C77.8387 45.6672 78.7331 46.817 79.8528 47.7188V47.7188C80.5317 48.065 81.2594 48.3058 82.0109 48.4327C82.4772 48.5141 82.9494 48.5575 83.4227 48.5625C83.6713 48.5471 83.9205 48.5471 84.1691 48.5625C85.2834 48.7602 86.2968 49.3327 87.0413 50.185C87.1873 50.331 87.382 50.4933 87.5443 50.688C87.5849 50.7345 87.6228 50.7832 87.6579 50.834C91.3738 55.1175 92.6882 64.5931 96.9397 67.6273C97.0101 67.6959 97.0926 67.751 97.1831 67.7895C97.2154 67.9203 97.2763 68.0422 97.3616 68.1465C97.6356 68.3177 97.93 68.4539 98.2378 68.5521C100.818 69.4607 101.824 73.2575 102.181 76.2916C102.181 76.9568 102.295 77.5896 102.327 78.1413C102.327 78.482 102.457 78.8228 102.489 79.0986C102.7 78.2549 102.992 77.0055 103.219 75.529C103.706 72.2839 103.885 68.0654 102.197 65.0312C101.587 63.7166 101.119 62.3404 100.802 60.9262V60.9262Z"
          fill="white"
        />
        <path
          d="M48.6804 79.9099C47.7425 77.7821 46.6581 75.722 45.4351 73.7442V73.7442C44.7649 74.9506 44.2211 76.2229 43.8124 77.541C43.3112 79.2267 43.049 80.9745 43.0335 82.7331C43.0328 83.8576 43.158 84.9788 43.4067 86.0755C43.4067 86.0755 43.4067 86.1566 43.4067 86.1891C43.4752 86.4543 43.5133 86.7265 43.5203 87.0003C43.4986 87.9558 43.1556 88.876 42.5467 89.6126C41.759 90.6153 41.3407 91.8587 41.3621 93.1335C41.3957 94.0652 41.6238 94.9796 42.0319 95.8178C42.4399 96.6561 43.0187 97.3998 43.7312 98.0011C43.7704 97.3812 44.0051 96.7897 44.4016 96.3116C44.7982 95.8335 45.3361 95.4934 45.9381 95.3402C45.1702 97.0942 44.9422 99.0372 45.2832 100.921C45.6243 102.806 46.5188 104.545 47.8529 105.919C47.0592 102.502 47.5623 98.9111 49.2646 95.8432C50.391 93.8127 51.0506 91.5568 51.1956 89.2394C51.1824 88.1469 51.0518 87.059 50.8062 85.9944C50.3067 83.8991 49.5944 81.8603 48.6804 79.9099Z"
          fill="white"
        />
        <path
          d="M74.7577 63.6521C74.741 63.5937 74.741 63.5319 74.7577 63.4736C74.8551 63.2302 75.5204 62.8732 76.494 62.4514C80.0254 61.0244 83.6739 59.9061 87.3984 59.109C87.99 59.1422 88.5568 59.3576 89.0211 59.7255C87.3984 55.8639 85.4025 52.5215 82.0598 52.5215C77.7759 52.5215 75.0985 48.2217 73.5082 44.2465C72.989 44.2465 72.4697 44.2465 71.8855 44.2465H71.4961C70.8308 44.2465 70.1817 44.2465 69.5326 44.2465C67.91 48.2217 65.265 52.5215 60.9648 52.5215C57.6221 52.5215 55.5937 55.8639 54.0035 59.7255C54.4679 59.3576 55.0347 59.1422 55.6262 59.109C59.3508 59.9061 62.9992 61.0244 66.5307 62.4514C67.5043 62.8732 68.1534 63.2302 68.2669 63.4736C68.2787 63.5434 68.2787 63.6147 68.2669 63.6845V74.8476C67.3907 73.9714 66.9039 71.424 66.6443 69.4121L66.5307 69.3309L65.9465 69.0389H65.7356C65.5135 68.9722 65.2851 68.9287 65.054 68.9091V68.9091C63.4132 69.22 61.755 69.4313 60.0886 69.5419C59.7482 69.565 59.4067 69.565 59.0663 69.5419C57.7126 69.3726 56.4233 68.8648 55.3179 68.0654L54.1009 67.2379C54.7223 66.5814 55.4805 66.0697 56.3218 65.7388C57.163 65.4079 58.0668 65.2661 58.9689 65.3233C59.5131 65.3374 60.0555 65.3917 60.5916 65.4855L62.6849 65.8425C64.0135 65.9702 65.3067 66.3443 66.4982 66.9458V66.9458C66.2594 66.5855 65.9936 66.2438 65.7031 65.9236C65.571 65.7645 65.4301 65.6128 65.2812 65.4693C65.1838 65.3719 65.1027 65.2584 64.9891 65.161C63.678 64.0452 62.1392 63.229 60.48 62.7694C58.8208 62.3098 57.0812 62.2179 55.3828 62.5001C54.5478 62.5928 53.7189 62.7337 52.9001 62.9219C51.2774 67.4163 50.4823 71.6187 48.1456 71.6349C47.9794 71.6033 47.8088 71.6033 47.6426 71.6349V71.6349L51.6668 78.1251C51.8095 78.4367 51.9341 78.7564 52.0401 79.0824C52.2568 79.9994 52.5952 80.8834 53.0461 81.7109C53.1922 82.0029 53.3544 82.2625 53.5005 82.5059C53.6465 82.7493 53.825 82.9927 53.9873 83.2036L54.4092 83.7553L55.1394 84.5828C56.1574 84.377 57.1409 84.0274 58.0602 83.5443L58.9365 83.09C59.2773 82.8953 59.6342 82.7168 60.0075 82.5384C61.1271 82.0354 63.691 81.143 63.7072 81.143C63.9181 79.9423 64.4536 77.8979 65.9465 77.6221C66.172 77.583 66.4025 77.583 66.628 77.6221C66.9404 77.7296 67.2196 77.9161 67.4385 78.1635C67.6575 78.4108 67.8087 78.7106 67.8775 79.0337C67.8416 78.998 67.7983 78.9708 67.7506 78.9539C67.7028 78.9371 67.652 78.9311 67.6016 78.9363V78.9363C67.2297 78.9794 66.854 78.9794 66.482 78.9363H66.271C65.1838 78.9363 65.265 80.2019 65.3786 81.1268L66.8714 81.8082L67.6503 82.1652L68.7375 82.6519C69.6421 83.0597 70.5684 83.4172 71.5123 83.7228V83.7228C73.5776 83.0257 75.5896 82.1798 77.5325 81.1917V81.1917C77.6461 80.2668 77.7272 79.0012 76.64 79.0012H76.4291C76.057 78.9597 75.6815 78.9597 75.3094 79.0012V79.0012C75.2591 78.996 75.2082 79.002 75.1605 79.0188C75.1128 79.0356 75.0694 79.0629 75.0336 79.0986C75.1024 78.7755 75.2536 78.4757 75.4725 78.2284C75.6915 77.981 75.9707 77.7945 76.283 77.687C76.5085 77.6479 76.7391 77.6479 76.9646 77.687C78.4574 77.8817 78.9929 80.0072 79.2039 81.2079C79.2039 81.2079 81.7839 82.1003 82.9036 82.6033L83.7636 83.0414L84.8508 83.6092C85.7702 84.0923 86.7537 84.4419 87.7717 84.6477L88.5019 83.8202L88.9238 83.2685C89.086 83.0576 89.2483 82.8304 89.4106 82.5708C89.5728 82.3112 89.7189 82.0678 89.8649 81.7758L90.011 81.4999C90.0975 81.3377 90.1786 81.1592 90.2544 80.9645C90.3398 80.7793 90.4157 80.5897 90.4815 80.3966C90.5627 80.2019 90.6276 80.0072 90.6925 79.7963C90.7574 79.5854 90.8223 79.3744 90.871 79.1473C90.9769 78.8213 91.1015 78.5016 91.2442 78.19L95.4145 71.6998C95.2483 71.6682 95.0777 71.6682 94.9115 71.6998V71.6998C92.5748 71.6998 91.6661 67.4001 90.0434 62.9057C89.2247 62.7174 88.3957 62.5766 87.5607 62.4838C85.8623 62.2016 84.1228 62.2936 82.4636 62.7532C80.8044 63.2128 79.2655 64.029 77.9544 65.1448C77.8408 65.2421 77.7597 65.3557 77.6623 65.4531C77.5134 65.5966 77.3725 65.7483 77.2404 65.9074C76.9499 66.2275 76.6841 66.5692 76.4453 66.9296H76.5264C77.7179 66.3281 79.0111 65.9539 80.3397 65.8263L82.433 65.4693C82.9692 65.3754 83.5116 65.3212 84.0557 65.307C84.9579 65.2499 85.8616 65.3917 86.7028 65.7226C87.5441 66.0534 88.3023 66.5652 88.9238 67.2216L87.7068 68.0491C86.6013 68.8486 85.3121 69.3564 83.9583 69.5256C83.618 69.5488 83.2764 69.5488 82.9361 69.5256H82.7576C80.5832 69.5256 79.1065 68.8928 78.0193 68.8928C77.7883 68.9125 77.5599 68.956 77.3378 69.0226H77.1268L76.5427 69.3147L76.4291 69.3958C76.1694 71.4078 75.6826 73.9552 74.8064 74.8313V63.6358L74.7577 63.6521Z"
          fill="white"
        />
        <path
          d="M172.849 97.6604V45.6419H181.416L207.217 72.2839L206.876 45.6419H220.799V97.6604H212.28L186.479 71.0184L186.771 97.6604H172.849Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M249.132 86.2053H270.989V97.6604H235.29V45.6419H270.648V57.097H249.132V65.6802H268.036V77.1353H249.132V86.2053Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M313.779 47.8161C316.49 49.2133 318.743 51.3588 320.27 53.998C321.854 56.8306 322.655 60.0341 322.59 63.2789C322.653 66.6758 321.831 70.0306 320.205 73.0141C318.631 75.7856 316.286 78.0403 313.455 79.5042C310.326 81.1095 306.845 81.9071 303.329 81.8245H297.504V97.5793H283.581V45.6419H304.108C307.46 45.5756 310.778 46.3215 313.779 47.8161V47.8161ZM306.883 68.6657C307.907 67.2563 308.417 65.5381 308.327 63.7981C308.421 62.0475 307.885 60.3211 306.818 58.9305C306.319 58.3281 305.687 57.8491 304.972 57.5311C304.257 57.2131 303.478 57.0645 302.696 57.097H297.504V70.4505H302.696C303.485 70.4991 304.274 70.363 305.001 70.0532C305.727 69.7434 306.372 69.2683 306.883 68.6657Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M370.752 45.6419V57.097H357.462V97.6604H343.539V57.097H330.266V45.6419H370.752Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M391.636 95.9405C388.46 94.4516 385.775 92.0875 383.896 89.1259C382.04 86.0672 381.09 82.5455 381.153 78.9688V45.6419H395.011V78.3198C394.957 79.4558 395.129 80.5912 395.516 81.6605C395.903 82.7299 396.498 83.712 397.267 84.5503C398.04 85.3408 398.972 85.959 400.001 86.3644C401.03 86.7699 402.133 86.9534 403.238 86.903C404.316 86.9455 405.39 86.7576 406.389 86.3519C407.388 85.9462 408.289 85.332 409.031 84.5503C410.56 82.8446 411.358 80.6076 411.254 78.3198V45.6419H425.145V78.9688C425.208 82.5455 424.257 86.0672 422.402 89.1259C420.523 92.0875 417.838 94.4516 414.662 95.9405C411.028 97.5354 407.102 98.3588 403.133 98.3588C399.164 98.3588 395.238 97.5354 391.604 95.9405H391.636Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M439.019 97.6604V45.6419H447.603L473.403 72.2839L473.046 45.6419H486.969V97.6604H478.466L452.73 71.0184L453.006 97.6604H439.019Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M515.301 86.2053H537.11V97.6604H501.411V45.6419H536.786V57.097H515.301V65.6802H534.222V77.1353H515.301V86.2053Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M625.969 97.6604H612.046L610.634 70.4505L600.395 97.6604H593.158L582.967 70.5965L581.556 97.6604H567.633L571.219 45.6419H586.829L596.793 74.6366L606.772 45.6744H622.382L625.969 97.6604Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M648.751 95.9405C645.575 94.4516 642.89 92.0875 641.011 89.1259C639.148 86.0704 638.197 82.5465 638.268 78.9688V45.6419H652.126V78.3198C652.02 80.6109 652.825 82.8508 654.366 84.5503C655.151 85.3517 656.099 85.9762 657.146 86.3819C658.192 86.7876 659.314 86.9653 660.434 86.903C661.512 86.9455 662.586 86.7576 663.585 86.3519C664.584 85.9462 665.485 85.332 666.227 84.5503C667.751 82.843 668.544 80.6056 668.434 78.3198V45.6419H682.357V78.9688C682.429 82.5465 681.477 86.0704 679.615 89.1259C677.745 92.0899 675.065 94.4551 671.891 95.9405C668.256 97.5354 664.33 98.3588 660.361 98.3588C656.392 98.3588 652.467 97.5354 648.832 95.9405H648.751Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M733.115 45.6419V57.097H719.825V97.6604H705.87V57.097H692.58V45.6419H733.115Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M753.998 95.9405C750.822 94.4516 748.137 92.0875 746.258 89.1259C744.395 86.0704 743.444 82.5465 743.516 78.9688V45.6419H757.357V78.3198C757.257 80.6129 758.068 82.8525 759.613 84.5503C760.389 85.3412 761.324 85.9595 762.356 86.3649C763.387 86.7703 764.493 86.9537 765.6 86.903C766.678 86.9455 767.752 86.7576 768.751 86.3519C769.75 85.9462 770.651 85.332 771.393 84.5503C772.917 82.843 773.71 80.6056 773.6 78.3198V45.6419H787.523V78.9688C787.595 82.5465 786.643 86.0704 784.78 89.1259C782.911 92.0899 780.23 94.4551 777.056 95.9405C773.422 97.5354 769.496 98.3588 765.527 98.3588C761.558 98.3588 757.632 97.5354 753.998 95.9405V95.9405Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M831.044 97.6604L828.723 90.1318H811.717L809.332 97.6604H794.484L813.746 45.6419H826.614L845.891 97.6604H831.044ZM815.304 78.6767H825.137L820.269 63.003L815.304 78.6767Z"
          className={styles.logoText}
          fill="white"
        />
        <path
          d="M869.079 86.2053H888V97.6604H855.156V45.6419H869.079V86.2053Z"
          className={styles.logoText}
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_112">
          <rect width="888" height="144" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}