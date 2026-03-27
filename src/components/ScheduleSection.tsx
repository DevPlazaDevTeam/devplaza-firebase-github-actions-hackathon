const days = [
  {
    day: "Day 1 — May 15",
    events: [
      { time: "09:00", title: "Check-in & Registration" },
      { time: "10:00", title: "Opening Ceremony & Keynote" },
      { time: "11:00", title: "Team Formation & Hacking Begins" },
      { time: "18:00", title: "Workshop: Building with AI APIs" },
      { time: "21:00", title: "Late Night Snacks & Games" },
    ],
  },
  {
    day: "Day 2 — May 16",
    events: [
      { time: "08:00", title: "Breakfast & Mentor Sessions" },
      { time: "12:00", title: "Checkpoint & Progress Review" },
      { time: "15:00", title: "Workshop: Pitch Perfect" },
      { time: "20:00", title: "Dinner & Networking" },
      { time: "23:59", title: "Code Freeze 🧊" },
    ],
  },
  {
    day: "Day 3 — May 17",
    events: [
      { time: "09:00", title: "Final Submissions" },
      { time: "10:00", title: "Demo Presentations" },
      { time: "14:00", title: "Judging & Deliberation" },
      { time: "16:00", title: "Awards Ceremony 🏆" },
      { time: "17:00", title: "Closing & After-Party" },
    ],
  },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">// SCHEDULE</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          48-Hour <span className="text-gradient">Timeline</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {days.map(({ day, events }) => (
          <div key={day} className="glass rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-4 text-lg">{day}</h3>
            <div className="space-y-4">
              {events.map(({ time, title }) => (
                <div key={time + title} className="flex gap-3">
                  <span className="text-primary font-mono text-sm w-14 shrink-0">{time}</span>
                  <span className="text-sm text-muted-foreground">{title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
