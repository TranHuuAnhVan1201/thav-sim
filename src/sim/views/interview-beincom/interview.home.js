import { useEffect, useRef } from "react";

function InteviewHome() {
  // quy ước là 90 ngày.
  const time_simle = 89;
  const dataSimple = [
    { id: 1, name: "Dương Minh Kỳ", dailys: [], cooking: [], like: 1 },
    { id: 2, name: "Lê Hoàng Linh", dailys: [], cooking: [], like: 2 },
    { id: 3, name: "Diệp Diễm Thư", dailys: [], cooking: [], like: 0 },
    { id: 4, name: "Hà Diễm Thương", dailys: [], cooking: [], like: 2 },
    { id: 5, name: "Hoàng Đức Minh", dailys: [], cooking: [], like: 1 },
    { id: 6, name: "Huỳnh Phước An", dailys: [], cooking: [], like: 0 },
    { id: 7, name: "Nguyễn An Thiện", dailys: [], cooking: [], like: 2 },
    { id: 8, name: "Nguyễn Trí Tâm", dailys: [], cooking: [], like: 1 },
    { id: 9, name: "Trần Nam Phương", dailys: [], cooking: [], like: 0 },
    { id: 10, name: "Võ Thành Tâm", dailys: [], cooking: [], like: 0 },
  ];
  const dataSimpleP2 = [
    { id: 1, name: "Dương Minh Kỳ", dailys: [], cooking: [], like: 1 },
    {
      id: 2,
      name: "Lê Hoàng Linh",
      dailys: [],
      cooking: [],
      like: 2,
      out: [
        { id: 0, out: 22, join: 27 },
        { id: 1, out: 35, join: 45 },
      ],
    },
    { id: 3, name: "Diệp Diễm Thư", dailys: [], cooking: [], like: 0 },
    { id: 4, name: "Hà Diễm Thương", dailys: [], cooking: [], like: 2 },
    { id: 5, name: "Hoàng Đức Minh", dailys: [], cooking: [], like: 1 },
    { id: 6, name: "Huỳnh Phước An", dailys: [], cooking: [], like: 0 },
    { id: 7, name: "Nguyễn An Thiện", dailys: [], cooking: [], like: 2 },
    { id: 8, name: "Nguyễn Trí Tâm", dailys: [], cooking: [], like: 1 },
    { id: 9, name: "Trần Nam Phương", dailys: [], cooking: [], like: 0 },
    { id: 10, name: "Võ Thành Tâm", dailys: [], cooking: [], like: 0 },
    {
      id: 11,
      name: "Huỳnh Bảo Đại",
      dailys: [],
      cooking: [],
      like: 2,
      out: [{ id: 0, out: 0, join: 32 }],
    },
  ];

    const dataSimpleP3 = [
    { id: 1, name: "Dương Minh Kỳ", dailys: [], cooking: [], like: 1 },
    {
      id: 2,
      name: "Lê Hoàng Linh",
      dailys: [],
      cooking: [],
      like: 2,
      out: [
        { id: 0, out: 22, join: 27 },
        { id: 1, out: 35, join: 45 },
      ],
    },
    { id: 3, name: "Diệp Diễm Thư", dailys: [], cooking: [], like: 0 },
    { id: 4, name: "Hà Diễm Thương", dailys: [], cooking: [], like: 2 },
    { id: 5, name: "Hoàng Đức Minh", dailys: [], cooking: [], like: 1 },
    { id: 6, name: "Huỳnh Phước An", dailys: [], cooking: [], like: 0 },
    { id: 7, name: "Nguyễn An Thiện", dailys: [], cooking: [], like: 2 },
    { id: 8, name: "Nguyễn Trí Tâm", dailys: [], cooking: [], like: 1 },
    { id: 9, name: "Trần Nam Phương", dailys: [], cooking: [], like: 0 },
    { id: 10, name: "Võ Thành Tâm", dailys: [], cooking: [], like: 0 },
    {
      id: 11,
      name: "Huỳnh Bảo Đại",
      dailys: [],
      cooking: [],
      like: 2,
      out: [{ id: 0, out: 0, join: 32 }],
    },
  ];

  const first = useRef(false);
  

  // câu 1
  // - 1 thành viên / ngày
  const daily_clean_up = () => {
    for (let i = 0; i < time_simle; i++) {
      for (let j = 0; j < dataSimple.length; j++) {
        if (i > time_simle) {
          dataSimple[j].dailys.push("Không phân công");
          i++;
        } else {
          dataSimple[j].dailys.push(i);
          if(j === 9) {break}
          ++i;
        }
      }
    }
    console.log('1-daily_clean_up',dataSimple);
    
  };

  // câu 2
  /// require: 1 sơ chế, 2 nấu ăn, 3 rửa chén
  /// 6 người / ngày
  const cookings = [
    {
      id: 1,
      session: "buổi sáng",
      name: "sơ chế",
      like: 0,
    },
    { id: 2, session: "buổi sáng", name: "nấu ăn", like: 1 },
    {
      id: 3,
      session: "buổi sáng",
      name: "rửa chén",
      like: 2,
    },
    {
      id: 4,
      session: "buổi chiều",
      name: "sơ chế",
      like: 0,
    },
    { id: 5, session: "buổi chiều", name: "nấu ăn", like: 1 },
    {
      id: 6,
      session: "buổi chiều",
      name: "rửa chén",
      like: 2,
    },
  ];
  const cooking_team = () => {
    for (let i = 0; i < time_simle; i++) {
      for (let j = 0; j < dataSimple.length; j++) {
        if (i > time_simle) {
          dataSimple[j].dailys.push("Không phân công");
          i++;
        } else {
          for (let z = 0; z < cookings.length; z++) {
           
           if (z === 5) {
              dataSimple[j].cooking.push({
                day: i,
                session: cookings[z].session,
                role: cookings[z].name,
              });
              i++;
              break;
            } else {
              dataSimple[j].cooking.push({
                day: i,
                session: cookings[z].session,
                role: cookings[z].name,
              });
            }

            if (j === 9) {
              j = 0;
              
            } else {
              ++j;
            }
          }
        }
      }
    }
    console.log("2-cooking_team", dataSimple);
  };

  // câu 3
  // phương án 1: set lại mảng từ đầu dài 90, đảm bảo: 1 ngày 6 bạn: đủ 2 sơ chế, 2 nấu, 2 rửa
  // yêu cầu biết ai thích gì, hoặc dev chọn ngẫu nhiên.

  // Câu 4
  // - Ngày 22 thỉnh thoảng về nhà, 5 hoặc 10 ngày. ví dụ: về từ 22-90 hoặc []
  // -- chia làm 2 trường hợp:
  // ---Trước ngày 22.
  // ---Sau ngày 22.
  // - Ngày 32 thêm Huỳnh Đại Bảo.
  // --- Trước ngày 32.
  // ---Sau ngày 32.
  // => Viết lại Câu 1, câu 2

  // 90 ngày chia thành 3 giai đoạn
  // Từ ngày 1 - 22
  // Từ ngày 22 - 32
  // Từ ngày 32 về sau






  // Kiểm tra Linh out hoặc join
  const checkOut = (data, check) => {
    let res = false
    for(let i = 0; i < data.length; i++) {
     if(data[i].out < check && check < data[i].join) {
      res = true;
      break
     } 
    }
    return res
    
  }
  // câu 4
  const daily_clean_up_q4 = ( data) => {
    for (let i = 0; i < time_simle; i++) {
      for (let j = 0; j < 11; j++) {
        if (i > time_simle) {
          dataSimpleP2[j].dailys.push("Không phân công");
          i++;
        } else if (i < 22 && j === 1) {
          dataSimpleP2[j].dailys.push(i);
          i++;

        } else if(i > 22 && j === 1) {
          const res = checkOut(data, i) 
          if(res) {
            j++;
            dataSimpleP2[j].dailys.push(i);
            i++;
          } else {
            dataSimpleP2[j].dailys.push(i);
            i++;
          }

        } else if (i < 32 && j === 10) {
          j = 0;
          dataSimpleP2[j].dailys.push(i);
          i++;
        } else {
          dataSimpleP2[j].dailys.push(i);
          i++;
        }
      }
    }

    console.log("4-daily_clean_up_q4", dataSimpleP2);
  };

  // Thời gian linh out.
  const data = [
    { id: 0, out: 22, join: 32 },
    { id: 1, out: 40, join: 45 },
    { id: 2, out: 80, join: 90 },
  ];
  const cooking_team_q4 = (data) => {
    for (let i = 0; i < time_simle; i++) {
      for (let j = 0; j < dataSimpleP3.length; j++) {
        if (i > time_simle) {
          dataSimpleP3[j].cooking.push({
                day: i,
                session: "Không phân công",
                role: "Không phân công"
              });
          i++;
        } else {
          let res = false;
          for (let z = 0; z < cookings.length; z++) {
            if(i > 22 && j === 1) {
             res = checkOut(data, i);
             if(res) {
              ++j
             }
            }
            if (i < 32 && j === 10) {
              j = 0;
            } 
            if (z === 5) {
              dataSimpleP3[j].cooking.push({
                day: i,
                session: cookings[z].session,
                role: cookings[z].name,
              });
              i++;
              break;
            } else {
              dataSimpleP3[j].cooking.push({
                day: i,
                session: cookings[z].session,
                role: cookings[z].name,
              });
            }

            if (j === dataSimpleP3.length - 1 || j > dataSimpleP3.length - 1) {
              j = 0;
            } else {
              ++j;
            }
          }

        
        }
      }
    }
    console.log("4-cooking_team_q4", dataSimpleP3);
  };




  useEffect(() => {
    if (!first.current) {
      first.current = true;

      daily_clean_up();
      cooking_team();
      daily_clean_up_q4(data);
      cooking_team_q4(data);
      
    }
  }, []);

  return <div>{JSON.stringify(dataSimple)}</div>;
}

export default InteviewHome;
