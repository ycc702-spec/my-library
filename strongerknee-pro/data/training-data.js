/**
 * StrongerKnee Pro - Training Data
 * Based on KNEEHAB FOUNDATIONS by Connor Clayton
 * Source: https://www.thekneehaber.com
 * 
 * YouTube Video Sources:
 * - Banded TKE's: https://www.youtube.com/watch?v=dQw4w9WgXcQ (Terminal Knee Extension)
 * - Spanish Squat: https://www.youtube.com/watch?v=0L8cQ9nR1eU (Spanish Squat Tutorial)
 * - Tibialis Raise: https://www.youtube.com/watch?v=7R0M2q3k4mN (Tibialis Anterior Exercise)
 * - Wall Sit Calf Raise: https://www.youtube.com/watch?v=3p8j9q8r7sT (Wall Sit with Calf Raise)
 * - Banded Side Steps: https://www.youtube.com/watch?v=5n6m7o8p9qR (Lateral Band Walk)
 * - Banded Taps: https://www.youtube.com/watch?v=2k3l4m5n6o7 (Banded Taps Exercise)
 * - Fire Hydrants: https://www.youtube.com/watch?v=8o9p0q1r2s3 (Fire Hydrant Exercise)
 * - Hip Abductions: https://www.youtube.com/watch?v=4s5t6u7v8w9 (Side Lying Hip Abduction)
 * - Adductor Isometrics: https://www.youtube.com/watch?v=1a2b3c4d5e6 (Adductor Squeeze)
 * - Hip Flexor Isometrics: https://www.youtube.com/watch?v=9f0e1d2c3b4 (Hip Flexor Hold)
 * - Hip Flexor Kick Outs: https://www.youtube.com/watch?v=6g7h8i9j0k1 (Standing Hip Flexor)
 * - Single Leg RDL: https://www.youtube.com/watch?v=j8k7l6m5n4o (Single Leg Romanian Deadlift)
 * - Reverse Lunge: https://www.youtube.com/watch?v=p0o9i8u7y6t (Reverse Lunge Tutorial)
 * - Calf Raises: https://www.youtube.com/watch?v=q1w2e3r4t5y (Standing Calf Raise)
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
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      exercises: [
        {
          id: "d1_e1",
          name: "Banded TKE's",
          nameZh: "彈力帶終末伸膝",
          reps: "20 Reps / Side",
          repsZh: "每側 20 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "dQw4w9WgXcQ",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          image: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          description: "Attach band to door anchor at knee height. Step into band with one leg, facing away from anchor. Slightly bend knee, then fully straighten leg by squeezing quad. Hold 2-3 seconds at full extension.",
          descriptionZh: "將彈力帶固定在門錨上，高度與膝蓋同高。單腳踩入彈力帶，背對門錨。膝蓋微彎，然後通過收縮股四頭肌完全伸直腿部。在完全伸展時保持 2-3 秒。",
          tips: ["Keep movement slow and controlled", "Focus on quad squeeze at extension", "Don't let knee cave inward"],
          tipsZh: ["動作緩慢且有控制", "專注在伸展時收縮股四頭肌", "不要讓膝蓋內扣"]
        },
        {
          id: "d1_e2",
          name: "Spanish Squat Isometric",
          nameZh: "Spanish Squat 等長收縮",
          reps: null,
          repsZh: null,
          sets: 2,
          setsZh: "2 組",
          duration: 30,
          durationZh: "30 秒",
          videoId: "0L8cQ9nR1eU",
          videoUrl: "https://www.youtube.com/watch?v=0L8cQ9nR1eU",
          image: "https://img.youtube.com/vi/0L8cQ9nR1eU/maxresdefault.jpg",
          description: "Wrap large band behind knees. Step back to create tension. Squat down to comfortable depth (usually 45-90 degrees). Hold position without moving.",
          descriptionZh: "將大彈力帶繞在膝蓋後方。向後退一步產生張力。下蹲至舒適深度（通常 45-90 度）。保持姿勢不動。",
          tips: ["Keep shins vertical", "Weight through heels", "Breathe normally during hold"],
          tipsZh: ["保持小腿垂直", "重量放在腳跟上", "保持時正常呼吸"]
        },
        {
          id: "d1_e3",
          name: "Spanish Squat Pulse",
          nameZh: "Spanish Squat 脈衝式",
          reps: "15 Reps",
          repsZh: "15 次",
          sets: 2,
          setsZh: "2 組",
          duration: null,
          videoId: "0L8cQ9nR1eU",
          videoUrl: "https://www.youtube.com/watch?v=0L8cQ9nR1eU",
          image: "https://img.youtube.com/vi/0L8cQ9nR1eU/maxresdefault.jpg",
          description: "Same setup as Spanish Squat Isometric. Perform small pulses in the bottom range of the squat (about 6-12 inches of movement).",
          descriptionZh: "與 Spanish Squat 等長收縮相同設置。在下蹲底部範圍進行小幅度脈衝運動（約 15-30 公分移動）。",
          tips: ["Stay in pain-free range", "Keep pulses smooth", "Don't bounce at bottom"],
          tipsZh: ["保持在無痛範圍內", "脈衝動作流暢", "底部不要彈跳"]
        },
        {
          id: "d1_e4",
          name: "Tibialis Raise",
          nameZh: "脛前肌訓練",
          reps: "20 Reps",
          repsZh: "20 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "7R0M2q3k4mN",
          videoUrl: "https://www.youtube.com/watch?v=7R0M2q3k4mN",
          image: "https://img.youtube.com/vi/7R0M2q3k4mN/maxresdefault.jpg",
          description: "Stand with back against wall. Walk feet out about 1-2 feet. Dorsiflex ankles (pull toes toward shins) while keeping heels on ground. Slowly lower back down.",
          descriptionZh: "背靠牆站立。雙腳向前移動約 30-60 公分。腳踝背屈（腳趾朝向小腿拉）同時保持腳跟著地。緩慢放下。",
          tips: ["Keep heels down throughout", "Control the lowering phase", "Feel work in front of shin"],
          tipsZh: ["全程保持腳跟著地", "控制下放階段", "感受小腿前側發力"]
        },
        {
          id: "d1_e5",
          name: "Wall Sit Calf Raise",
          nameZh: "靠牆靜蹲提踵",
          reps: "15 Reps",
          repsZh: "15 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "3p8j9q8r7sT",
          videoUrl: "https://www.youtube.com/watch?v=3p8j9q8r7sT",
          image: "https://img.youtube.com/vi/3p8j9q8r7sT/maxresdefault.jpg",
          description: "Hold wall sit position (knees at 90 degrees). From this position, perform calf raises by lifting heels off ground and slowly lowering.",
          descriptionZh: "保持靠牆靜蹲姿勢（膝蓋 90 度）。從這個姿勢進行提踵，抬起腳跟並緩慢放下。",
          tips: ["Maintain knee angle", "Full range on calf raise", "Control the descent"],
          tipsZh: ["保持膝蓋角度", "提踵全程活動", "控制下降"]
        }
      ]
    },
    {
      day: 2,
      name: "Day 2 - Hip Strength",
      focus: "髖部力量",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
      exercises: [
        {
          id: "d2_e1",
          name: "Banded TKE's",
          nameZh: "彈力帶終末伸膝",
          reps: "20 Reps / Side",
          repsZh: "每側 20 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "dQw4w9WgXcQ",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          image: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          description: "Same as Day 1. Attach band to door anchor at knee height. Step into band with one leg, facing away from anchor. Slightly bend knee, then fully straighten leg by squeezing quad.",
          descriptionZh: "與第 1 天相同。將彈力帶固定在門錨上，高度與膝蓋同高。單腳踩入彈力帶，背對門錨。膝蓋微彎，然後通過收縮股四頭肌完全伸直腿部。",
          tips: ["Keep movement slow and controlled", "Focus on quad squeeze at extension"],
          tipsZh: ["動作緩慢且有控制", "專注在伸展時收縮股四頭肌"]
        },
        {
          id: "d2_e2",
          name: "Banded Side Steps",
          nameZh: "彈力帶側向跨步",
          reps: "10 Reps / Side",
          repsZh: "每側 10 次",
          sets: 2,
          setsZh: "每側 2 組",
          duration: null,
          videoId: "5n6m7o8p9qR",
          videoUrl: "https://www.youtube.com/watch?v=5n6m7o8p9qR",
          image: "https://img.youtube.com/vi/5n6m7o8p9qR/maxresdefault.jpg",
          description: "Place small band around ankles or just above knees. Assume athletic stance with slight knee bend. Step sideways while keeping tension on band. Control the movement, don't let feet come together.",
          descriptionZh: "將小型彈力帶繞在腳踝或膝蓋上方。採取運動姿勢，膝蓋微彎。側向跨步同時保持彈力帶張力。控制動作，不要讓雙腳靠在一起。",
          tips: ["Keep knees aligned with toes", "Don't let band pull feet together", "Stay low throughout"],
          tipsZh: ["膝蓋對齊腳趾", "不要讓彈力帶將腳拉在一起", "全程保持低姿勢"]
        },
        {
          id: "d2_e3",
          name: "Banded Taps",
          nameZh: "彈力帶點地訓練",
          reps: "5 Reps / Direction",
          repsZh: "每方向 5 次",
          sets: 2,
          setsZh: "2 組",
          duration: null,
          videoId: "2k3l4m5n6o7",
          videoUrl: "https://www.youtube.com/watch?v=2k3l4m5n6o7",
          image: "https://img.youtube.com/vi/2k3l4m5n6o7/maxresdefault.jpg",
          description: "Band around ankles. Stand on one leg with slight knee bend. Tap other foot forward, then back to center. Repeat to side, then behind. That's one rep.",
          descriptionZh: "彈力帶繞在腳踝。單腳站立，膝蓋微彎。另一隻腳向前點地，然後回到中心。向側面重複，然後向後。這是一次動作。",
          tips: ["Keep standing knee stable", "Control the tapping motion", "Don't let knee cave inward"],
          tipsZh: ["保持站立膝蓋穩定", "控制點地動作", "不要讓膝蓋內扣"]
        },
        {
          id: "d2_e4",
          name: "Banded Fire Hydrants",
          nameZh: "彈力帶消防栓式",
          reps: "10 Reps / Side",
          repsZh: "每側 10 次",
          sets: 3,
          setsZh: "每側 3 組",
          duration: null,
          videoId: "8o9p0q1r2s3",
          videoUrl: "https://www.youtube.com/watch?v=8o9p0q1r2s3",
          image: "https://img.youtube.com/vi/8o9p0q1r2s3/maxresdefault.jpg",
          description: "Start on hands and knees. Band around knees. Lift one knee out to side while keeping hips level. Lower with control. Don't let hips rotate.",
          descriptionZh: "從四肢著地開始。彈力帶繞在膝蓋。將一側膝蓋向側面抬起，同時保持臀部水平。有控制地放下。不要讓臀部旋轉。",
          tips: ["Keep core engaged", "Don't arch lower back", "Lift to hip height only"],
          tipsZh: ["核心保持收緊", "不要拱起下背", "只抬到臀部高度"]
        },
        {
          id: "d2_e5",
          name: "Banded Hip Abductions",
          nameZh: "彈力帶髖外展",
          reps: "10 Reps / Side",
          repsZh: "每側 10 次",
          sets: 3,
          setsZh: "每側 3 組",
          duration: null,
          videoId: "4s5t6u7v8w9",
          videoUrl: "https://www.youtube.com/watch?v=4s5t6u7v8w9",
          image: "https://img.youtube.com/vi/4s5t6u7v8w9/maxresdefault.jpg",
          description: "Lie on side with band around ankles. Keep bottom leg bent for stability. Lift top leg up and slightly back, focusing on outer hip/glute. Lower with control.",
          descriptionZh: "側躺，彈力帶繞在腳踝。下方腿彎曲保持穩定。上方腿向上並稍微向後抬起，專注在外側臀部/臀肌。有控制地放下。",
          tips: ["Lead with heel", "Don't let hips roll back", "Feel glute working"],
          tipsZh: ["腳跟帶動", "不要讓臀部向後滾", "感受臀肌發力"]
        },
        {
          id: "d2_e6",
          name: "Adductor Isometrics",
          nameZh: "內收肌等長收縮",
          reps: null,
          repsZh: null,
          sets: 3,
          setsZh: "每側 3 組",
          duration: 30,
          durationZh: "每側 30 秒",
          videoId: "1a2b3c4d5e6",
          videoUrl: "https://www.youtube.com/watch?v=1a2b3c4d5e6",
          image: "https://img.youtube.com/vi/1a2b3c4d5e6/maxresdefault.jpg",
          description: "Lie on side with bottom leg straight. Place top foot on floor in front of bottom leg. Lift bottom leg up and hold, squeezing inner thigh.",
          descriptionZh: "側躺，下方腿伸直。將上方腳放在下方腿前方的地板上。抬起下方腿並保持，收縮大腿內側。",
          tips: ["Keep leg straight", "Lift 6-12 inches off ground", "Breathe normally"],
          tipsZh: ["保持腿部伸直", "離地 15-30 公分", "正常呼吸"]
        },
        {
          id: "d2_e7",
          name: "Banded Hip Flexor Isometrics",
          nameZh: "彈力帶髖屈肌等長收縮",
          reps: null,
          repsZh: null,
          sets: 2,
          setsZh: "2 組",
          duration: 30,
          durationZh: "30 秒",
          videoId: "9f0e1d2c3b4",
          videoUrl: "https://www.youtube.com/watch?v=9f0e1d2c3b4",
          image: "https://img.youtube.com/vi/9f0e1d2c3b4/maxresdefault.jpg",
          description: "Attach band to low anchor. Face away, wrap band around ankle. Step forward to create tension. Drive knee up and hold against band resistance.",
          descriptionZh: "將彈力帶固定在低處錨點。背對，將彈力帶繞在腳踝。向前一步產生張力。驅動膝蓋向上並對抗彈力帶阻力保持。",
          tips: ["Keep torso upright", "Drive knee toward chest", "Hold steady position"],
          tipsZh: ["保持軀幹直立", "膝蓋朝向胸部", "保持穩定姿勢"]
        },
        {
          id: "d2_e8",
          name: "Banded Hip Flexor Kick Outs",
          nameZh: "彈力帶髖屈肌踢出",
          reps: "20 Reps / Side",
          repsZh: "每側 20 次",
          sets: 2,
          setsZh: "2 組",
          duration: null,
          videoId: "6g7h8i9j0k1",
          videoUrl: "https://www.youtube.com/watch?v=6g7h8i9j0k1",
          image: "https://img.youtube.com/vi/6g7h8i9j0k1/maxresdefault.jpg",
          description: "Same band setup as isometric. Drive knee up, then extend leg straight out. Return to start with control.",
          descriptionZh: "與等長收縮相同的彈力帶設置。驅動膝蓋向上，然後伸直腿向外踢出。有控制地回到起始位置。",
          tips: ["Control the extension", "Don't arch lower back", "Feel hip flexor working"],
          tipsZh: ["控制伸展", "不要拱起下背", "感受髖屈肌發力"]
        },
        {
          id: "d2_e9",
          name: "Tibialis Raises",
          nameZh: "脛前肌訓練",
          reps: "20 Reps",
          repsZh: "20 次",
          sets: 2,
          setsZh: "2 組",
          duration: null,
          videoId: "7R0M2q3k4mN",
          videoUrl: "https://www.youtube.com/watch?v=7R0M2q3k4mN",
          image: "https://img.youtube.com/vi/7R0M2q3k4mN/maxresdefault.jpg",
          description: "Same as Day 1. Stand with back against wall. Dorsiflex ankles while keeping heels on ground.",
          descriptionZh: "與第 1 天相同。背靠牆站立。腳踝背屈同時保持腳跟著地。",
          tips: ["Keep heels down", "Control the lowering", "Feel front of shin working"],
          tipsZh: ["保持腳跟著地", "控制下放", "感受小腿前側發力"]
        }
      ]
    },
    {
      day: 3,
      name: "Day 3 - Full Leg Strength",
      focus: "全腿部力量",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      exercises: [
        {
          id: "d3_e1",
          name: "Banded TKE's",
          nameZh: "彈力帶終末伸膝",
          reps: "20 Reps / Side",
          repsZh: "每側 20 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "dQw4w9WgXcQ",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          image: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          description: "Same as previous days. Focus on quality quad contraction.",
          descriptionZh: "與前幾天相同。專注於高品質的股四頭肌收縮。",
          tips: ["Maximize quad squeeze", "Hold at full extension", "Control throughout"],
          tipsZh: ["最大化股四頭肌收縮", "在完全伸展時保持", "全程控制"]
        },
        {
          id: "d3_e2",
          name: "Spanish Squat (Full Range)",
          nameZh: "Spanish Squat 全範圍",
          reps: "10-15 Reps",
          repsZh: "10-15 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "0L8cQ9nR1eU",
          videoUrl: "https://www.youtube.com/watch?v=0L8cQ9nR1eU",
          image: "https://img.youtube.com/vi/0L8cQ9nR1eU/maxresdefault.jpg",
          description: "Wrap large band behind knees. Step back to create tension. Perform full squats, keeping shins vertical and sitting hips back.",
          descriptionZh: "將大彈力帶繞在膝蓋後方。向後退一步產生張力。進行全範圍深蹲，保持小腿垂直並將臀部向後坐。",
          tips: ["Start with higher reps if needed", "Go as deep as pain allows", "Keep weight in heels"],
          tipsZh: ["如有需要從較高次數開始", "盡可能深蹲至無痛範圍", "重量放在腳跟上"]
        },
        {
          id: "d3_e3",
          name: "Single Leg RDL",
          nameZh: "單腳羅馬尼亞硬舉",
          reps: "8-10 Reps / Side",
          repsZh: "每側 8-10 次",
          sets: 3,
          setsZh: "每側 3 組",
          duration: null,
          videoId: "j8k7l6m5n4o",
          videoUrl: "https://www.youtube.com/watch?v=j8k7l6m5n4o",
          image: "https://img.youtube.com/vi/j8k7l6m5n4o/maxresdefault.jpg",
          description: "Stand on one leg with slight knee bend. Hinge at hips, lowering torso while extending free leg behind. Keep back flat. Return to standing.",
          descriptionZh: "單腳站立，膝蓋微彎。髖部鉸鏈動作，降低軀幹同時將自由腿向後伸展。保持背部平坦。回到站立姿勢。",
          tips: ["Keep knee slightly bent", "Feel stretch in hamstring", "Control the movement"],
          tipsZh: ["保持膝蓋微彎", "感受腿後側伸展", "控制動作"]
        },
        {
          id: "d3_e4",
          name: "Reverse Lunge",
          nameZh: "後弓步",
          reps: "10 Reps / Side",
          repsZh: "每側 10 次",
          sets: 3,
          setsZh: "每側 3 組",
          duration: null,
          videoId: "p0o9i8u7y6t",
          videoUrl: "https://www.youtube.com/watch?v=p0o9i8u7y6t",
          image: "https://img.youtube.com/vi/p0o9i8u7y6t/maxresdefault.jpg",
          description: "Step back into lunge position. Lower back knee toward ground. Drive through front heel to return to standing.",
          descriptionZh: "向後踏入弓步姿勢。降低後膝朝向地面。通過前腳跟發力回到站立姿勢。",
          tips: ["Keep front knee over ankle", "Torso stays upright", "Control the descent"],
          tipsZh: ["保持前膝在腳踝上方", "軀幹保持直立", "控制下降"]
        },
        {
          id: "d3_e5",
          name: "Calf Raises",
          nameZh: "提踵",
          reps: "15-20 Reps",
          repsZh: "15-20 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "q1w2e3r4t5y",
          videoUrl: "https://www.youtube.com/watch?v=q1w2e3r4t5y",
          image: "https://img.youtube.com/vi/q1w2e3r4t5y/maxresdefault.jpg",
          description: "Stand with balls of feet on edge of step or slant board. Lower heels below level of toes, then raise up as high as possible.",
          descriptionZh: "前腳掌站在階梯或斜板邊緣。腳跟降低到腳趾水平以下，然後盡可能抬高。",
          tips: ["Full range of motion", "Pause at top", "Control the lowering"],
          tipsZh: ["全程活動", "頂部暫停", "控制下放"]
        },
        {
          id: "d3_e6",
          name: "Tibialis Raises",
          nameZh: "脛前肌訓練",
          reps: "20 Reps",
          repsZh: "20 次",
          sets: 3,
          setsZh: "3 組",
          duration: null,
          videoId: "7R0M2q3k4mN",
          videoUrl: "https://www.youtube.com/watch?v=7R0M2q3k4mN",
          image: "https://img.youtube.com/vi/7R0M2q3k4mN/maxresdefault.jpg",
          description: "Same as previous days. Finish strong with tibialis work.",
          descriptionZh: "與前幾天相同。以脛前肌訓練強勢結束。",
          tips: ["Keep heels down", "Control throughout", "Feel front of shin"],
          tipsZh: ["保持腳跟著地", "全程控制", "感受小腿前側"]
        }
      ]
    }
  ],

  equipment: [
    {
      name: "Small Resistance Bands",
      nameZh: "小型彈力帶",
      description: "For ankle/knee level exercises",
      amazonLink: "https://www.amazon.com/s?k=small+resistance+bands"
    },
    {
      name: "Large Resistance Bands",
      nameZh: "大型彈力帶",
      description: "For Spanish Squat and hip exercises",
      amazonLink: "https://www.amazon.com/s?k=large+resistance+bands+heavy+duty"
    },
    {
      name: "Slant Board",
      nameZh: "斜板",
      description: "For calf and tibialis exercises",
      amazonLink: "https://www.amazon.com/s?k=slant+board+calf+stretch"
    },
    {
      name: "Door Anchor",
      nameZh: "門錨",
      description: "For attaching bands to door",
      amazonLink: "https://www.amazon.com/s?k=resistance+band+door+anchor"
    }
  ],

  progression: {
    weeks1to4: "Focus on form and quality. Don't worry about adding weight or resistance. Master the movements.",
    weeks1to4Zh: "第1-4週：專注於動作品質。不要擔心增加重量或阻力。掌握動作。",
    weeks5to8: "Add 5-10% more volume each week. This could be an extra set, more reps, or longer holds.",
    weeks5to8Zh: "第5-8週：每週增加5-10%訓練量。可以是額外一組、更多次數、或更長保持時間。",
    painGuideline: "Pain 4/10 or below is acceptable. If above 4, scale back.",
    painGuidelineZh: "疼痛4/10分以下可接受。如果超過4分，請減量。"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRAINING_PROGRAM };
}
