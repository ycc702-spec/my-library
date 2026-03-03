/**
 * StrongerKnee Pro - Training Data
 * Based on KNEEHAB FOUNDATIONS by Connor Clayton
 * Source: https://www.thekneehaber.com
 * 
 * YouTube Video Sources - All videos from @thekneehaber official channel
 * Extracted from KNEEHAB FOUNDATIONS PDF
 */

const TRAINING_PROGRAM = {
  name: "KNEEHAB FOUNDATIONS",
  author: "Connor Clayton (@thekneehaber)",
  description: "Professional knee rehabilitation program designed to build strong, healthy knees through structured training using minimal equipment.",
  frequency: "3 days per week (Mon/Wed/Fri recommended)",
  duration: "8 weeks",
  painGuideline: "4/10 or below is acceptable. Scale back if above 4.",
  
  schedule: [
    {
      day: 1,
      name: "Day 1 - Quad Strength + Stability",
      focus: "股四頭肌力量 + 穩定性",
      exercises: [
        {
          id: "d1_e1",
          name: "Banded TKE's",
          nameZh: "彈力帶終末伸膝",
          reps: "20 Reps / Side",
          repsZh: "每側 20 次",
          sets: 3,
          videoId: "wZ1WuEUGcZQ",
          videoUrl: "https://youtube.com/shorts/wZ1WuEUGcZQ",
          image: "https://img.youtube.com/vi/wZ1WuEUGcZQ/maxresdefault.jpg"
        },
        {
          id: "d1_e2",
          name: "Spanish Squat Isometric",
          nameZh: "Spanish Squat 等長收縮",
          reps: null,
          sets: 2,
          duration: 30,
          videoId: "956iceJJfBM",
          videoUrl: "https://youtube.com/shorts/956iceJJfBM",
          image: "https://img.youtube.com/vi/956iceJJfBM/maxresdefault.jpg"
        },
        {
          id: "d1_e3",
          name: "Spanish Squat Pulse",
          nameZh: "Spanish Squat 脈衝式",
          reps: "15 Reps",
          sets: 2,
          videoId: "P5UNgcQKkFQ",
          videoUrl: "https://youtube.com/shorts/P5UNgcQKkFQ",
          image: "https://img.youtube.com/vi/P5UNgcQKkFQ/maxresdefault.jpg"
        },
        {
          id: "d1_e4",
          name: "Tibialis Raise",
          nameZh: "脛前肌訓練",
          reps: "20 Reps",
          sets: 3,
          videoId: "BzAJt1RsIbc",
          videoUrl: "https://youtube.com/shorts/BzAJt1RsIbc",
          image: "https://img.youtube.com/vi/BzAJt1RsIbc/maxresdefault.jpg"
        },
        {
          id: "d1_e5",
          name: "Wall Sit Calf Raise",
          nameZh: "靠牆靜蹲提踵",
          reps: "15 Reps",
          sets: 3,
          videoId: "F5zq8Ef_Qog",
          videoUrl: "https://youtube.com/shorts/F5zq8Ef_Qog",
          image: "https://img.youtube.com/vi/F5zq8Ef_Qog/maxresdefault.jpg"
        },
        {
          id: "d1_e6",
          name: "Poliquin Step Ups",
          nameZh: "Poliquin 階梯上踏",
          reps: "10 Reps / Side",
          sets: 3,
          videoId: "oZV1BJM5T9w",
          videoUrl: "https://youtube.com/shorts/oZV1BJM5T9w",
          image: "https://img.youtube.com/vi/oZV1BJM5T9w/maxresdefault.jpg"
        },
        {
          id: "d1_e7",
          name: "Wall Assisted Sissy Squats",
          nameZh: "靠牆輔助 Sissy 深蹲",
          reps: "10 Reps",
          sets: 2,
          videoId: "qYatDCVfEqw",
          videoUrl: "https://youtube.com/shorts/qYatDCVfEqw",
          image: "https://img.youtube.com/vi/qYatDCVfEqw/maxresdefault.jpg"
        },
        {
          id: "d1_e8",
          name: "Split Squat Isometric",
          nameZh: "分腿蹲等長收縮",
          reps: null,
          sets: 2,
          duration: 30,
          videoId: "q63XGmbV7Lk",
          videoUrl: "https://youtube.com/shorts/q63XGmbV7Lk",
          image: "https://img.youtube.com/vi/q63XGmbV7Lk/maxresdefault.jpg"
        }
      ]
    },
    {
      day: 2,
      name: "Day 2 - Hamstrings + Posterior Chain",
      focus: "腿後肌群 + 後側鏈",
      exercises: [
        {
          id: "d2_e1",
          name: "Banded TKE's",
          nameZh: "彈力帶終末伸膝",
          reps: "20 Reps / Side",
          sets: 3,
          videoId: "wZ1WuEUGcZQ",
          videoUrl: "https://youtube.com/shorts/wZ1WuEUGcZQ",
          image: "https://img.youtube.com/vi/wZ1WuEUGcZQ/maxresdefault.jpg"
        },
        {
          id: "d2_e2",
          name: "Single Leg Calf Raises",
          nameZh: "單腳提踵",
          reps: "15 Reps / Side",
          sets: 2,
          videoId: "ZQY5dDwz_Z8",
          videoUrl: "https://youtube.com/shorts/ZQY5dDwz_Z8",
          image: "https://img.youtube.com/vi/ZQY5dDwz_Z8/maxresdefault.jpg"
        },
        {
          id: "d2_e3",
          name: "Tibialis Raises",
          nameZh: "脛前肌訓練",
          reps: "15 Reps",
          sets: 2,
          videoId: "BzAJt1RsIbc",
          videoUrl: "https://youtube.com/shorts/BzAJt1RsIbc",
          image: "https://img.youtube.com/vi/BzAJt1RsIbc/maxresdefault.jpg"
        },
        {
          id: "d2_e4",
          name: "Glute Bridge Isometric",
          nameZh: "臀橋等長收縮",
          reps: null,
          sets: 3,
          duration: 45,
          videoId: "cs2bJ77AR6s",
          videoUrl: "https://youtube.com/shorts/cs2bJ77AR6s",
          image: "https://img.youtube.com/vi/cs2bJ77AR6s/maxresdefault.jpg"
        },
        {
          id: "d2_e5",
          name: "Glute Bridge Walkouts",
          nameZh: "臀橋步行",
          reps: "8 Reps",
          sets: 2,
          videoId: "ONB4ffAAXK4",
          videoUrl: "https://youtube.com/shorts/ONB4ffAAXK4",
          image: "https://img.youtube.com/vi/ONB4ffAAXK4/maxresdefault.jpg"
        },
        {
          id: "d2_e6",
          name: "Banded Hamstring Curls",
          nameZh: "彈力帶腿後肌彎舉",
          reps: "10 Reps / Side",
          sets: 3,
          videoId: "tUZTdrO2pxE",
          videoUrl: "https://youtube.com/shorts/tUZTdrO2pxE",
          image: "https://img.youtube.com/vi/tUZTdrO2pxE/maxresdefault.jpg"
        },
        {
          id: "d2_e7",
          name: "KOT Wall Sit",
          nameZh: "KOT 靠牆靜蹲",
          reps: null,
          sets: 2,
          duration: 20,
          videoId: "30Vo_x2UxXU",
          videoUrl: "https://youtube.com/shorts/30Vo_x2UxXU",
          image: "https://img.youtube.com/vi/30Vo_x2UxXU/maxresdefault.jpg"
        },
        {
          id: "d2_e8",
          name: "Single Leg Balance",
          nameZh: "單腳平衡",
          reps: null,
          sets: 2,
          duration: 30,
          videoId: "PGhT3y2zHQc",
          videoUrl: "https://youtube.com/shorts/PGhT3y2zHQc",
          image: "https://img.youtube.com/vi/PGhT3y2zHQc/maxresdefault.jpg"
        }
      ]
    },
    {
      day: 3,
      name: "Day 3 - Hip Strength",
      focus: "髖部力量",
      exercises: [
        {
          id: "d3_e1",
          name: "Banded TKE's",
          nameZh: "彈力帶終末伸膝",
          reps: "20 Reps / Side",
          sets: 3,
          videoId: "wZ1WuEUGcZQ",
          videoUrl: "https://youtube.com/shorts/wZ1WuEUGcZQ",
          image: "https://img.youtube.com/vi/wZ1WuEUGcZQ/maxresdefault.jpg"
        },
        {
          id: "d3_e2",
          name: "Banded Side Steps",
          nameZh: "彈力帶側向跨步",
          reps: "10 Reps / Side",
          sets: 2,
          videoId: "JhyhTeNX2Aw",
          videoUrl: "https://youtube.com/shorts/JhyhTeNX2Aw",
          image: "https://img.youtube.com/vi/JhyhTeNX2Aw/maxresdefault.jpg"
        },
        {
          id: "d3_e3",
          name: "Banded Taps",
          nameZh: "彈力帶點地訓練",
          reps: "5 Reps / Direction",
          sets: 2,
          videoId: "b9xWOOURFZw",
          videoUrl: "https://youtube.com/shorts/b9xWOOURFZw",
          image: "https://img.youtube.com/vi/b9xWOOURFZw/maxresdefault.jpg"
        },
        {
          id: "d3_e4",
          name: "Banded Fire Hydrants",
          nameZh: "彈力帶消防栓式",
          reps: "10 Reps / Side",
          sets: 3,
          videoId: "gGxNHpax2JE",
          videoUrl: "https://youtube.com/shorts/gGxNHpax2JE",
          image: "https://img.youtube.com/vi/gGxNHpax2JE/maxresdefault.jpg"
        },
        {
          id: "d3_e5",
          name: "Banded Hip Abductions",
          nameZh: "彈力帶髖外展",
          reps: "10 Reps / Side",
          sets: 3,
          videoId: "Wg3MGqzS2x4",
          videoUrl: "https://youtube.com/shorts/Wg3MGqzS2x4",
          image: "https://img.youtube.com/vi/Wg3MGqzS2x4/maxresdefault.jpg"
        },
        {
          id: "d3_e6",
          name: "Adductor Isometrics",
          nameZh: "內收肌等長收縮",
          reps: null,
          sets: 3,
          duration: 30,
          videoId: "9HvEf5LG8t0",
          videoUrl: "https://youtube.com/shorts/9HvEf5LG8t0",
          image: "https://img.youtube.com/vi/9HvEf5LG8t0/maxresdefault.jpg"
        },
        {
          id: "d3_e7",
          name: "Banded Hip Flexor Isometrics",
          nameZh: "彈力帶髖屈肌等長收縮",
          reps: null,
          sets: 2,
          duration: 30,
          videoId: null,
          videoUrl: null,
          image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
          note: "PDF中未提供影片連結，請至 @thekneehaber Instagram 搜尋"
        },
        {
          id: "d3_e8",
          name: "Banded Hip Flexor Kick Outs",
          nameZh: "彈力帶髖屈肌踢出",
          reps: "20 Reps / Side",
          sets: 2,
          videoId: "y8NKFonO7Is",
          videoUrl: "https://youtube.com/shorts/y8NKFonO7Is",
          image: "https://img.youtube.com/vi/y8NKFonO7Is/maxresdefault.jpg"
        },
        {
          id: "d3_e9",
          name: "Tibialis Raises",
          nameZh: "脛前肌訓練",
          reps: "20 Reps",
          sets: 2,
          videoId: "BzAJt1RsIbc",
          videoUrl: "https://youtube.com/shorts/BzAJt1RsIbc",
          image: "https://img.youtube.com/vi/BzAJt1RsIbc/maxresdefault.jpg"
        }
      ]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRAINING_PROGRAM };
}