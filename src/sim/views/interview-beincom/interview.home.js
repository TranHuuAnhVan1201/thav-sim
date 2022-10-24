import { useEffect, useRef } from "react";

function InteviewHome() {
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

  const first = useRef(false);

  // câu 1
  const daily_clean_up = () => {
    for (let i = 0; i < time_simle; i++) {
      for (let j = 0; j < 10; j++) {
        if (i > time_simle) {
          dataSimple[j].dailys.push("Không phân công");
          i++;
        } else {
          dataSimple[j].dailys.push(i);
          i++;
        }
      }
    }

    console.log(dataSimple);
  };

  // câu 2
  /// require: 1 sơ chế, 2 nấu ăn, 3 rửa chén
  /// 3 người / ngày
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
      // không quan tâm vòng j
      for (let j = 0; j < dataSimple.length; j++) {
        if (i > time_simle) {
          dataSimple[j].dailys.push("Không phân công");
          i++;
        } else {
          // hoàn thành 6 công việc => I + 1.
          // z = 5, hết 1 ngày => i tăng 1 đơn vị
          // j = 9, hết 1 vòng người => bắt đầu bằng 1

          for (let z = 0; z < cookings.length; z++) {
            if (i > time_simle) {
              dataSimple[j].cooking.push("Không phân công");
              i++;
            } else if (z === 5) {
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

          //  i++;
        }
      }
    }
    console.log("data simple 2", dataSimple);
  };

  // câu 3
  // phương án 1: set lại mảng từ đầu dài 90, đảm bảo: 1 ngày 6 bạn: đủ 2 sơ chế, 2 nấu, 2 rửa

  // Câu 4
  // - Ngày 22 thỉnh thoảng về nhà, 5 hoặc 10 ngày.
  // -- chia làm 2 trường hợp:
  // ---Out trước 32.
  // ---Out sau 32.
  // - Ngày 32 thêm Huỳnh Đại Bảo.
  // - Viết lại Câu 1, câu 2

  // 90 ngày chia thành 3 giai đoạn
  // Từ ngày 1 - 22
  const dataSimpleP1 = [
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

  // từ ngày 22 - 32
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

  const out = [
    { id: 0, out: 22, join: 27 },
    { id: 1, out: 35, join: 45 },
  ];
  // câu 4

  const daily_clean_up_q4 = (out = 0, join = 0) => {
    for (let i = 0; i < time_simle; i++) {
      for (let j = 0; j < 11; j++) {
        if (i > time_simle) {
          dataSimpleP2[j].dailys.push("Không phân công");
          i++;
        } else if (out < i && i < join && j === 1) {
          console.log("linh out");
          ++j;
          dataSimpleP2[j].dailys.push(i);
          i++;
        } else if (i < 32 && j === 10) {
          console.log("trước 32");
          j = 0;
          dataSimpleP2[j].dailys.push(i);
          i++;
        } else {
          dataSimpleP2[j].dailys.push(i);
          i++;
        }
      }
    }

    console.log("q4", dataSimpleP2);
  };

  useEffect(() => {
    console.log(first);
    if (!first.current) {
      daily_clean_up();
      cooking_team();
      // out, join
      daily_clean_up_q4(23, 80);
      first.current = true;
    }
  }, []);

  return <div>{JSON.stringify(dataSimple)}</div>;
}

export default InteviewHome;
