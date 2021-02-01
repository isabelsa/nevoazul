import * as React from 'react'
import { motion } from 'framer-motion'

const Asterisk = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="118"
      height="118"
      viewBox="0 0 118 118"
    >
      <motion.path
        animate={{
          rotate: props.isHovered ? 20 : 0,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 200,
          },
        }}
        fill="#A0B9A6"
        d="M56.9943804,0.234296339 C61.5524997,-0.846910161 66.1240766,1.97168459 67.2052831,6.52980393 L67.2052831,6.52980393 L69.166593,14.7982379 C69.9048533,17.9105745 71.0006975,20.8862229 72.4116533,23.6773658 C74.4598964,22.9850247 76.4633439,22.1226627 78.4013521,21.0924975 L78.4013521,21.0924975 L89.3054236,15.2963429 C91.9137229,13.9098786 95.0552095,13.978932 97.6000669,15.4786686 C101.639288,17.8590644 102.984032,23.0631924 100.603636,27.1024138 L100.603636,27.1024138 L96.2768457,34.4444132 C94.7444816,37.0446353 93.5259228,39.7778353 92.6233636,42.5903088 C93.2465758,42.8543869 93.8772123,43.1036903 94.5158942,43.3376665 L94.5158942,43.3376665 L111.438272,49.5370502 C114.747591,50.7493939 117.175097,53.6132922 117.828898,57.0765152 C118.854076,62.5069512 115.282909,67.7402605 109.852473,68.7654386 L109.852473,68.7654386 L101.014923,70.4338246 C98.8059763,70.850838 96.6620578,71.4455668 94.5984686,72.2028033 L94.7233715,72.4655851 L102.65349,88.8462342 C104.184486,92.0086976 103.935745,95.7438962 101.998927,98.6754249 C98.9670346,103.264437 92.7890706,104.526732 88.2000583,101.49484 L88.2000583,101.49484 L80.8409865,96.6328099 C78.1271358,94.839809 75.2520894,93.4087349 72.281153,92.3386778 C70.7578612,95.4560829 69.6222497,98.8029509 68.9365725,102.317567 L68.9365725,102.317567 L67.2052831,111.19174 C66.5898993,114.346049 64.231357,116.874253 61.1273226,117.70692 C56.6393307,118.910837 52.0251268,116.248568 50.8212097,111.760576 L50.8212097,111.760576 L47.5524389,99.5751714 C46.8796427,97.067105 45.9756191,94.6603458 44.8648909,92.3779612 C41.5872332,93.5675733 38.4302051,95.1973018 35.4829234,97.2647325 L35.4829234,97.2647325 L28.294519,102.307185 C25.670362,104.147953 22.227313,104.334698 19.4194563,102.788551 C15.3559101,100.55096 13.8756814,95.4428784 16.113273,91.3793322 L16.113273,91.3793322 L22.252524,80.2302331 C23.4825816,77.9964046 24.4842041,75.6783826 25.2589395,73.3080334 C22.5436725,72.0765865 19.6681619,71.1377358 16.6720426,70.527463 L16.6720426,70.527463 L8.02142777,68.7654386 C4.70036839,68.0889795 1.94607672,65.7800717 0.700218838,62.6281087 C-1.33471715,57.4798145 1.18915833,51.6566559 6.33745251,49.62172 L6.33745251,49.62172 L23.1088426,42.9935784 C22.2672826,41.2846072 21.2982253,39.6229019 20.2023519,38.0224853 L20.2023519,38.0224853 L15.149214,30.6428681 C13.2355809,27.8481928 12.8654989,24.2751909 14.1657229,21.1476329 C16.2873077,16.0443742 22.1442006,13.62725 27.2474592,15.7488348 L27.2474592,15.7488348 L44.0154902,22.7198316 C44.2981892,22.8373584 44.5818475,22.9515145 44.8664083,23.0623025 C45.682672,21.3921199 46.3869911,19.6573373 46.9708863,17.8671054 L46.9708863,17.8671054 L50.8879475,5.85733523 C51.8045573,3.04699523 54.1181481,0.916551636 56.9943804,0.234296339 Z"
      />
    </svg>
  )
}

export default Asterisk
