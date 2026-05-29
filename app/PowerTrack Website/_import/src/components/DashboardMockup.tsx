import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { Activity, Zap, DollarSign, Wifi, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
const data = [
{
  time: '00:00',
  kw: 1.2
},
{
  time: '04:00',
  kw: 0.8
},
{
  time: '08:00',
  kw: 3.5
},
{
  time: '12:00',
  kw: 2.1
},
{
  time: '16:00',
  kw: 4.8
},
{
  time: '20:00',
  kw: 5.2
},
{
  time: '24:00',
  kw: 1.5
}];

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[4/3]">
      {/* Software UI Mockup (Background) */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          rotate: -2
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: -2
        }}
        transition={{
          duration: 0.8,
          delay: 0.2
        }}
        className="absolute top-0 left-0 w-[85%] h-[85%] bg-powertrack-surface rounded-xl border border-powertrack-border overflow-hidden flex flex-col">
        
        {/* Dashboard Header */}
        <div className="p-5 border-b border-powertrack-border bg-powertrack-surface">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-accent-teal/10 border border-powertrack-accent-teal/20 text-powertrack-accent-teal text-[10px] font-bold uppercase tracking-widest mb-3">
            <Layers size={12} />
            Live Data
          </div>
          <h3 className="text-xl font-bold text-powertrack-text mb-1">
            Real-Time Power Flow
          </h3>
          <p className="text-xs text-powertrack-muted">
            Monitor incoming wattage, review historical trends, and track
            estimated costs.
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="p-5 flex-1 flex flex-col gap-4 bg-powertrack-bg">
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-powertrack-surface p-3 rounded-lg border border-powertrack-border">
              <div className="text-[9px] uppercase font-bold tracking-widest text-powertrack-muted mb-1">
                Current Draw
              </div>
              <div className="text-lg font-bold text-powertrack-text">
                3.2{' '}
                <span className="text-powertrack-accent-teal text-xs">kW</span>
              </div>
            </div>
            <div className="bg-powertrack-surface p-3 rounded-lg border border-powertrack-border">
              <div className="text-[9px] uppercase font-bold tracking-widest text-powertrack-muted mb-1">
                Today
              </div>
              <div className="text-lg font-bold text-powertrack-text">
                24.5{' '}
                <span className="text-powertrack-accent-green text-xs">
                  kWh
                </span>
              </div>
            </div>
            <div className="bg-powertrack-surface p-3 rounded-lg border border-powertrack-border">
              <div className="text-[9px] uppercase font-bold tracking-widest text-powertrack-muted mb-1">
                Est. Cost
              </div>
              <div className="text-lg font-bold text-powertrack-text">
                $4.12{' '}
                <span className="text-powertrack-accent-amber text-xs">
                  USD
                </span>
              </div>
            </div>
            <div className="bg-powertrack-surface p-3 rounded-lg border border-powertrack-border">
              <div className="text-[9px] uppercase font-bold tracking-widest text-powertrack-muted mb-1">
                Peak
              </div>
              <div className="text-lg font-bold text-powertrack-text">
                5.2{' '}
                <span className="text-powertrack-accent-magenta text-xs">
                  kW
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[120px] bg-powertrack-surface rounded-lg border border-powertrack-border p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 5,
                  right: 0,
                  left: -20,
                  bottom: 0
                }}>
                
                <defs>
                  <linearGradient id="colorKw" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2DD4BF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2DD4BF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#1F2A3D" />
                
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 10,
                    fill: '#7A8699'
                  }} />
                
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 10,
                    fill: '#7A8699'
                  }} />
                
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F1B2A',
                    color: '#E8EEF5',
                    borderRadius: '8px',
                    border: '1px solid #1F2A3D'
                  }}
                  itemStyle={{
                    color: '#2DD4BF'
                  }} />
                
                <Area
                  type="monotone"
                  dataKey="kw"
                  stroke="#2DD4BF"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorKw)" />
                
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Hardware Module Mockup (Foreground) */}
      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          y: 40
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: 'spring',
          stiffness: 100
        }}
        className="absolute bottom-0 right-0 w-[55%] h-[65%] bg-[#0A1320] rounded-xl border border-[#1F2A3D] overflow-hidden flex flex-col">
        
        {/* Hardware details */}
        <div className="relative flex-1 p-5 flex flex-col justify-between overflow-hidden">
          {/* PCB Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#2DD4BF 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}>
          </div>

          <div className="relative z-10 flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 bg-[#0F1B2A] rounded-md border border-[#1F2A3D] flex items-center justify-center">
                <Cpu size={24} className="text-powertrack-muted" />
              </div>
              <div className="text-[8px] text-powertrack-muted font-mono">
                ESP32-WROOM-32
              </div>
            </div>

            {/* Antenna */}
            <div className="flex flex-col items-end gap-1">
              <div className="w-8 h-2 bg-[#1F2A3D] rounded-sm"></div>
              <div className="w-6 h-1.5 bg-[#1F2A3D] rounded-sm mr-1"></div>
              <div className="w-8 h-2 bg-[#1F2A3D] rounded-sm"></div>
              <Wifi
                size={14}
                className="text-powertrack-accent-teal mt-2 animate-pulse" />
              
            </div>
          </div>

          {/* Current Clamp Connector */}
          <div className="relative z-10 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-[#1F2A3D] flex items-center justify-center bg-[#0F1B2A] relative">
                <div className="w-4 h-4 rounded-full bg-[#1F2A3D]"></div>
                {/* Wire coming out */}
                <div className="absolute top-1/2 left-full w-20 h-2 bg-[#1F2A3D] -translate-y-1/2"></div>
              </div>
              <div className="text-[10px] text-powertrack-muted font-mono ml-16">
                CT SENSOR IN
              </div>
            </div>
          </div>

          {/* Status LEDs */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-powertrack-accent-teal animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-powertrack-accent-green shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
          </div>
        </div>

        {/* Hardware Label */}
        <div className="h-8 bg-[#0F1B2A] border-t border-[#1F2A3D] flex items-center px-4 justify-between">
          <span className="text-[9px] text-powertrack-muted font-mono tracking-widest">
            POWERTRACK v2.1
          </span>
          <span className="text-[9px] text-powertrack-muted font-mono">
            MAC: 00:1B:44:11:3A:B7
          </span>
        </div>
      </motion.div>
    </div>);

}