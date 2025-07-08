import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  User,
  Building,
  Globe,
  ChevronDown,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react";

const AnalyticsDashboard = () => {
  const [selectedDimension, setSelectedDimension] = useState("cohort-summary");
  const [expandedSections, setExpandedSections] = useState({
    composites: true,
    insights: true,
  });
  const [expandedIndividuals, setExpandedIndividuals] = useState({});
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Sample data for group comparison
  const cohortData = {
    title: "Sales Development Representatives",
    subtitle: "Cohort Performance Analysis (12 members)",
    period: "Last 90 days",
    individuals: [
      {
        id: 1,
        name: "Sarah Chen",
        title: "Senior SDR",
        manager: "Mike Johnson",
        avatar: "SC",
        composites: {
          communicationIntensity: {
            value: 8.2,
            percentile: 85,
            trend: "up",
            trendValue: 12,
          },
          synchronousCommunication: {
            value: 6.8,
            percentile: 88,
            trend: "up",
            trendValue: 15,
          },
          asynchronousCommunication: {
            value: 3.4,
            percentile: 25,
            trend: "down",
            trendValue: -8,
          },
          initiative: {
            value: 7.8,
            percentile: 92,
            trend: "up",
            trendValue: 18,
          },
          externalOutreach: {
            value: 6.9,
            percentile: 45,
            trend: "stable",
            trendValue: 2,
          },
        },
        summary:
          "Sarah demonstrates exceptional initiative and communication intensity, positioning her as a top performer within the SDR cohort. Her increasing proactive engagement suggests strong potential for advancement.",
      },
      {
        id: 2,
        name: "Alex Rodriguez",
        title: "SDR",
        manager: "Mike Johnson",
        avatar: "AR",
        composites: {
          communicationIntensity: {
            value: 7.8,
            percentile: 78,
            trend: "up",
            trendValue: 9,
          },
          synchronousCommunication: {
            value: 5.2,
            percentile: 62,
            trend: "stable",
            trendValue: 1,
          },
          asynchronousCommunication: {
            value: 4.2,
            percentile: 58,
            trend: "up",
            trendValue: 6,
          },
          initiative: {
            value: 6.1,
            percentile: 42,
            trend: "down",
            trendValue: -7,
          },
          externalOutreach: {
            value: 8.1,
            percentile: 88,
            trend: "up",
            trendValue: 14,
          },
        },
        summary:
          "Alex shows strong communication skills with excellent external outreach. Focus on initiative development could unlock higher performance potential.",
      },
      {
        id: 3,
        name: "Emma Wilson",
        title: "SDR",
        manager: "Mike Johnson",
        avatar: "EW",
        composites: {
          communicationIntensity: {
            value: 7.1,
            percentile: 62,
            trend: "stable",
            trendValue: 3,
          },
          synchronousCommunication: {
            value: 5.8,
            percentile: 85,
            trend: "up",
            trendValue: 11,
          },
          asynchronousCommunication: {
            value: 3.9,
            percentile: 45,
            trend: "down",
            trendValue: -4,
          },
          initiative: {
            value: 8.9,
            percentile: 98,
            trend: "up",
            trendValue: 22,
          },
          externalOutreach: {
            value: 5.2,
            percentile: 18,
            trend: "down",
            trendValue: -12,
          },
        },
        summary:
          "Emma excels in initiative and synchronous communication but needs support with external outreach activities. High potential for leadership roles.",
      },
      {
        id: 4,
        name: "James Park",
        title: "Junior SDR",
        manager: "Sarah Chen",
        avatar: "JP",
        composites: {
          communicationIntensity: {
            value: 5.9,
            percentile: 32,
            trend: "up",
            trendValue: 8,
          },
          synchronousCommunication: {
            value: 3.8,
            percentile: 28,
            trend: "stable",
            trendValue: 1,
          },
          asynchronousCommunication: {
            value: 2.8,
            percentile: 12,
            trend: "up",
            trendValue: 5,
          },
          initiative: {
            value: 4.2,
            percentile: 8,
            trend: "up",
            trendValue: 12,
          },
          externalOutreach: {
            value: 7.8,
            percentile: 75,
            trend: "up",
            trendValue: 16,
          },
        },
        summary:
          "James shows promise with improving trends across most metrics. Strong external outreach skills provide a solid foundation for growth.",
      },
      {
        id: 5,
        name: "Lisa Thompson",
        title: "SDR",
        manager: "Mike Johnson",
        avatar: "LT",
        composites: {
          communicationIntensity: {
            value: 6.5,
            percentile: 48,
            trend: "down",
            trendValue: -6,
          },
          synchronousCommunication: {
            value: 4.8,
            percentile: 68,
            trend: "stable",
            trendValue: 2,
          },
          asynchronousCommunication: {
            value: 5.1,
            percentile: 78,
            trend: "up",
            trendValue: 9,
          },
          initiative: {
            value: 7.2,
            percentile: 75,
            trend: "stable",
            trendValue: 1,
          },
          externalOutreach: {
            value: 9.1,
            percentile: 95,
            trend: "up",
            trendValue: 18,
          },
        },
        summary:
          "Lisa demonstrates excellent external outreach capabilities with strong initiative. Declining communication intensity warrants attention.",
      },
      {
        id: 6,
        name: "David Kim",
        title: "Senior SDR",
        manager: "Mike Johnson",
        avatar: "DK",
        composites: {
          communicationIntensity: {
            value: 9.1,
            percentile: 95,
            trend: "stable",
            trendValue: 3,
          },
          synchronousCommunication: {
            value: 6.2,
            percentile: 88,
            trend: "up",
            trendValue: 10,
          },
          asynchronousCommunication: {
            value: 2.9,
            percentile: 15,
            trend: "down",
            trendValue: -8,
          },
          initiative: {
            value: 5.8,
            percentile: 35,
            trend: "down",
            trendValue: -11,
          },
          externalOutreach: {
            value: 4.1,
            percentile: 8,
            trend: "down",
            trendValue: -15,
          },
        },
        summary:
          "David shows high communication intensity and sync communication skills but declining initiative and external outreach need immediate attention.",
      },
    ],
    composites: [
      {
        name: "Communication Intensity",
        description: "Volume and frequency of communications",
        cohortAverage: 7.1,
        cohortTrend: "up",
        cohortTrendValue: 8,
      },
      {
        name: "Synchronous Communication",
        description: "Real-time communication patterns",
        cohortAverage: 5.8,
        cohortTrend: "up",
        cohortTrendValue: 12,
      },
      {
        name: "Asynchronous Communication",
        description: "Delayed communication patterns",
        cohortAverage: 4.2,
        cohortTrend: "down",
        cohortTrendValue: -5,
      },
      {
        name: "Initiative",
        description: "Proactive vs. reactive communication patterns",
        cohortAverage: 6.7,
        cohortTrend: "stable",
        cohortTrendValue: 2,
      },
      {
        name: "External Outreach",
        description: "Communication with external stakeholders",
        cohortAverage: 6.9,
        cohortTrend: "up",
        cohortTrendValue: 7,
      },
    ],
    llmInsights: {
      summary:
        "The SDR cohort shows strong overall performance with clear differentiation across key metrics. Communication intensity and external outreach are particular strengths, while initiative development presents the biggest opportunity for team improvement.",
      keyFindings: [
        "Top performers (Sarah, David) show 25%+ higher communication intensity",
        "Initiative scores vary dramatically (4.2 to 8.9) indicating coaching opportunities",
        "External outreach capabilities are well-distributed but inconsistent",
        "Synchronous communication preferences align with role requirements",
      ],
      implications: [
        "Focus coaching efforts on initiative development for bottom quartile",
        "Leverage top performers (Sarah, Emma) for peer mentoring",
        "Standardize external outreach processes to support struggling members",
        "Consider workload management for high-intensity communicators",
      ],
    },
  };

  const dimensionOptions = [
    {
      value: "individual-trends",
      label: "Individual vs. Self",
      icon: User,
      category: "Individual",
    },
    {
      value: "individual-comparison",
      label: "Individual vs. Individual",
      icon: Users,
      category: "Individual",
    },
    {
      value: "cohort-summary",
      label: "Individual vs. Cohort",
      icon: Users,
      category: "Individual",
    },
    {
      value: "cohort-trends",
      label: "Cohort vs. Self",
      icon: Building,
      category: "Cohort",
    },
    {
      value: "cohort-comparison",
      label: "Cohort vs. Cohort",
      icon: Building,
      category: "Cohort",
    },
    {
      value: "org-summary",
      label: "Cohort vs. Organization",
      icon: Building,
      category: "Cohort",
    },
    {
      value: "company-summary",
      label: "Company vs. Industry",
      icon: Globe,
      category: "Company",
    },
  ];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleIndividual = (id) => {
    setExpandedIndividuals((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="w-3 h-3 text-green-500" />;
      case "down":
        return <ArrowDown className="w-3 h-3 text-red-500" />;
      default:
        return <Minus className="w-3 h-3 text-gray-400" />;
    }
  };

  const getIntensityLevel = (percentile) => {
    if (percentile >= 95) return "highest";
    if (percentile >= 80) return "high";
    if (percentile >= 20) return "neutral";
    if (percentile >= 5) return "low";
    return "lowest";
  };

  const getIntensityColor = (level) => {
    switch (level) {
      case "highest":
        return "text-emerald-700 bg-emerald-100";
      case "high":
        return "text-blue-700 bg-blue-100";
      case "neutral":
        return "text-gray-700 bg-gray-100";
      case "low":
        return "text-amber-700 bg-amber-100";
      case "lowest":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const CompositeChart = ({ composite, individuals, compositeKey }) => {
    const sortedIndividuals = [...individuals].sort(
      (a, b) =>
        a.composites[compositeKey].percentile -
        b.composites[compositeKey].percentile
    );

    return (
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {composite.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {composite.description}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {composite.cohortAverage}
              </div>
              <div className="text-xs text-gray-500">Cohort Avg</div>
            </div>
            <div className="flex items-center space-x-1">
              {getTrendIcon(composite.cohortTrend)}
              <span
                className={`text-sm font-medium ${
                  composite.cohortTrend === "up"
                    ? "text-green-600"
                    : composite.cohortTrend === "down"
                    ? "text-red-600"
                    : "text-gray-500"
                }`}
              >
                {composite.cohortTrendValue > 0 ? "+" : ""}
                {composite.cohortTrendValue}%
              </span>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative mb-4">
          {/* Background bars - full width 0-100 percentile */}
          <div className="h-12 rounded-lg overflow-hidden flex">
            <div className="bg-yellow-200 w-1/5"></div>
            <div className="bg-gray-200 w-3/5"></div>
            <div className="bg-blue-200 w-1/5"></div>
          </div>

          {/* Percentile lines */}
          <div className="absolute inset-0 flex">
            {/* 20th percentile */}
            <div className="w-1/5 relative">
              <div className="absolute right-0 top-0 w-0.5 h-12 border-r-2 border-dashed border-purple-600"></div>
            </div>
            {/* 50th percentile */}
            <div className="w-3/10 relative">
              <div className="absolute right-0 top-0 w-0.5 h-12 border-r-2 border-dashed border-blue-600"></div>
            </div>
            {/* 80th percentile */}
            <div className="w-3/10 relative">
              <div className="absolute right-0 top-0 w-0.5 h-12 border-r-2 border-dashed border-green-600"></div>
            </div>
            <div className="w-1/5"></div>
          </div>

          {/* Individual points */}
          {sortedIndividuals.map((individual) => {
            const percentile = individual.composites[compositeKey].percentile;
            const position = percentile; // Direct percentage positioning

            return (
              <div
                key={individual.id}
                className="absolute top-3 w-6 h-6 cursor-pointer transform -translate-x-3"
                style={{ left: `${position}%` }}
                onMouseEnter={() =>
                  setHoveredPoint({
                    individual,
                    composite: compositeKey,
                    x: position,
                    y: 50,
                  })
                }
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="w-6 h-6 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-semibold shadow-md hover:shadow-lg transition-shadow">
                  {individual.avatar
                    .split("")
                    .map((char) => char.charAt(0))
                    .join("")}
                </div>
              </div>
            );
          })}

          {/* Hover tooltip */}
          {hoveredPoint && (
            <div
              className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm min-w-48 border-t-2 border-t-blue-500"
              style={{
                left: `${hoveredPoint.x}%`,
                top: "-90px",
                transform: "translateX(-50%)",
              }}
            >
              <div className="font-semibold text-gray-900">
                {hoveredPoint.individual.name}
              </div>
              <div className="text-gray-600">
                {hoveredPoint.individual.title}
              </div>
              <div className="text-gray-500 text-xs">
                Manager: {hoveredPoint.individual.manager}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span>
                  Value:{" "}
                  {
                    hoveredPoint.individual.composites[hoveredPoint.composite]
                      .value
                  }
                </span>
                <span className="text-blue-600">
                  {
                    hoveredPoint.individual.composites[hoveredPoint.composite]
                      .percentile
                  }
                  %ile
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500 mr-1">Trend:</span>
                {getTrendIcon(
                  hoveredPoint.individual.composites[hoveredPoint.composite]
                    .trend
                )}
                <span
                  className={`text-xs font-medium ml-1 ${
                    hoveredPoint.individual.composites[hoveredPoint.composite]
                      .trend === "up"
                      ? "text-green-600"
                      : hoveredPoint.individual.composites[
                          hoveredPoint.composite
                        ].trend === "down"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {hoveredPoint.individual.composites[hoveredPoint.composite]
                    .trendValue > 0
                    ? "+"
                    : ""}
                  {
                    hoveredPoint.individual.composites[hoveredPoint.composite]
                      .trendValue
                  }
                  %
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>20th %ile</span>
          <span>50th %ile</span>
          <span>80th %ile</span>
        </div>
      </div>
    );
  };

  // Sort individuals by communication intensity for the insights section
  const sortedByCommIntensity = [...cohortData.individuals].sort(
    (a, b) =>
      b.composites.communicationIntensity.percentile -
      a.composites.communicationIntensity.percentile
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Comprehensive workforce analytics and insights
            </p>
          </div>

          {/* Dimension Selector */}
          <div className="relative">
            <select
              value={selectedDimension}
              onChange={(e) => setSelectedDimension(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {dimensionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.category}: {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Context Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {cohortData.title}
              </h2>
              <p className="text-gray-600 mt-1">{cohortData.subtitle}</p>
              <p className="text-sm text-gray-500 mt-2">{cohortData.period}</p>
            </div>
            <div className="flex items-center space-x-2">
              {cohortData.individuals.slice(0, 5).map((individual) => (
                <div
                  key={individual.id}
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                >
                  {individual.avatar}
                </div>
              ))}
              {cohortData.individuals.length > 5 && (
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  +{cohortData.individuals.length - 5}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Composites Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => toggleSection("composites")}
              className="flex items-center space-x-2 w-full text-left"
            >
              {expandedSections.composites ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                Performance Composites
              </h3>
              <span className="text-sm text-gray-500">
                ({cohortData.composites.length} metrics)
              </span>
            </button>
          </div>

          {expandedSections.composites && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CompositeChart
                  composite={cohortData.composites[0]}
                  individuals={cohortData.individuals}
                  compositeKey="communicationIntensity"
                />
                <CompositeChart
                  composite={cohortData.composites[1]}
                  individuals={cohortData.individuals}
                  compositeKey="synchronousCommunication"
                />
                <CompositeChart
                  composite={cohortData.composites[2]}
                  individuals={cohortData.individuals}
                  compositeKey="asynchronousCommunication"
                />
                <CompositeChart
                  composite={cohortData.composites[3]}
                  individuals={cohortData.individuals}
                  compositeKey="initiative"
                />
                <CompositeChart
                  composite={cohortData.composites[4]}
                  individuals={cohortData.individuals}
                  compositeKey="externalOutreach"
                />
              </div>
            </div>
          )}
        </div>

        {/* AI Insights Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => toggleSection("insights")}
              className="flex items-center space-x-2 w-full text-left"
            >
              {expandedSections.insights ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                What the Data Says & Why it Matters
              </h3>
              <div className="flex items-center space-x-1 ml-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-blue-600 font-medium">
                  AI Generated
                </span>
              </div>
            </button>
          </div>

          {expandedSections.insights && (
            <div className="p-6">
              {/* Cohort Summary */}
              <div className="prose max-w-none mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Cohort Overview
                </h4>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {cohortData.llmInsights.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Key Findings
                    </h5>
                    <ul className="space-y-2">
                      {cohortData.llmInsights.keyFindings.map(
                        (finding, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {finding}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Implications & Actions
                    </h5>
                    <ul className="space-y-2">
                      {cohortData.llmInsights.implications.map(
                        (implication, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {implication}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Individual Insights */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Individual Insights
                </h4>
                <div className="space-y-3">
                  {sortedByCommIntensity.map((individual) => {
                    const intensityLevel = getIntensityLevel(
                      individual.composites.communicationIntensity.percentile
                    );
                    const intensityColor = getIntensityColor(intensityLevel);

                    return (
                      <div
                        key={individual.id}
                        className="border border-gray-200 rounded-lg"
                      >
                        <button
                          onClick={() => toggleIndividual(individual.id)}
                          className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                {individual.avatar}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {individual.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {individual.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Manager: {individual.manager}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div
                                className={`px-2 py-1 rounded-full text-xs font-medium ${intensityColor}`}
                              >
                                {intensityLevel}
                              </div>
                              {expandedIndividuals[individual.id] ? (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </button>

                        {expandedIndividuals[individual.id] && (
                          <div className="px-4 pb-4 border-t border-gray-100">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {individual.summary}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
