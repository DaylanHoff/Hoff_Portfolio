"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Database, Server, GitBranch, Shield, Layers } from "lucide-react";

export function AWSArchitecture() {
  const nodes = [
    { id: "github", label: "GitHub", icon: GitBranch, x: 10, y: 50, color: "bg-purple-500" },
    { id: "actions", label: "GitHub Actions", icon: Server, x: 30, y: 50, color: "bg-blue-500" },
    { id: "s3", label: "S3 Bucket", icon: Database, x: 50, y: 30, color: "bg-orange-500" },
    { id: "cloudfront", label: "CloudFront", icon: Layers, x: 70, y: 30, color: "bg-green-500" },
    { id: "security", label: "IAM/Security", icon: Shield, x: 50, y: 70, color: "bg-red-500" },
  ];

  const connections = [
    { from: "github", to: "actions" },
    { from: "actions", to: "s3" },
    { from: "s3", to: "cloudfront" },
    { from: "actions", to: "security" },
  ];

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>AWS & CI/CD Architecture</CardTitle>
        <CardDescription>
          Automated deployment pipeline using GitHub Actions and AWS services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-64 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-4">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((conn, index) => {
              const fromNode = nodes.find((n) => n.id === conn.from);
              const toNode = nodes.find((n) => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              
              return (
                <motion.line
                  key={index}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-muted-foreground"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                className="absolute"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className={`${node.color} p-3 rounded-full text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium bg-background px-2 py-1 rounded shadow-sm border">
                      {node.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold">Deployment Flow</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Code pushed to GitHub</li>
              <li>• GitHub Actions triggers build</li>
              <li>• Assets deployed to S3</li>
              <li>• CloudFront serves content globally</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Key Features</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Automated CI/CD pipeline</li>
              <li>• Infrastructure as Code</li>
              <li>• Secure IAM policies</li>
              <li>• Global CDN distribution</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
