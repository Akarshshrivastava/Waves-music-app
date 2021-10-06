import { v4 as uuidv4 } from "uuid";
const chillHop = () => {
  return [
    {
      title: "What If I Told You",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
      artist: "Juan Rios",
      id: uuidv4(),
      active: true,
      color: ["#FEB78B", "#FDD799"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
    },
    {
      title: "Places",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      artist: "Ruck P",
      id: uuidv4(),
      active: false,
      color: ["#D4838C", "#FBA562"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563",
    },
    {
      title: "Trainspotting",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      artist: "Aarigod, Makzo",
      id: uuidv4(),
      active: false,
      color: ["#ECC6B4", "##AD96C0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20120",
    },
    {
      title: "Passing Notes",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      artist: "Middle School, Aso",
      id: uuidv4(),
      active: false,
      color: ["#B96547", "#1C384E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22938",
    },
    {
      title: "This Too Shall Pass",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
      artist: "Smile High, Teddy Roxpin",
      id: uuidv4(),
      active: false,
      color: ["#3C6D81", "#AADAD8"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23338",
    },
    {
      title: "Where The Sun Dies",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      artist: "Deylayde, anybodyy",
      id: uuidv4(),
      active: false,
      color: ["#9D48C8", "#A2D5AE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23188",
    },
  ];
};

export default chillHop;
