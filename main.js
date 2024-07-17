const questions = [
    {
        question: 'Valve used to stop the flow of fluid',
        correct: 'cut-off valve',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Equipment powered by an electric motor or by an engine used to spray fertilizer or pesticide to a certain height',
        correct: 'power sprayer for mango',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Tip of lance of the power sprayer where the chemical is sprayed out',
        correct: 'nozzle',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Component of the power sprayer used to regulate the pressure',
        correct: 'pressure relief valve',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Overflow of water from the nozzle',
        correct: 'runoff',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Type of power sprayer mounted on a steel frame which is carried by at least two (2) operators for transport',
        correct: 'Frame mounted power sprayer',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Type of power sprayer mounted on wheels, either pushed by an operator or towed by a vehicle. The pump can be powered by an engine or an electric motor',
        correct: 'Wheel-mounted power sprayer',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The main frame shall be made of mild steel (e.g. AISI 1020) or better material with a thickness of at least __mm. It shall be constructed from welded angular or flat bars.',
        correct: '6 mm',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The prime mover shall be mounted on the main frame with hexagonal bolts with at least ________diameter. Lock nuts shall be used to secure the prime mover to the frame.',
        correct: '10 mm (3/8”)',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The pump shall be mounted on the main frame with hexagonal bolts with at least ___diameter. Lock nuts shall be used.',
        correct: '10 mm (3/8”)',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The pump shall be of a _______type and shall have a ______integrated in the system.',
        correct: 'positive displacement, return line',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The spray hose shall be made of chemical resistant polyvinylchloride or better material with an inside diameter of at least ______. It shall have a minimum length of ____m and a maximum length of ____m.',
        correct: '10 mm (3/8”); 15 m; 200 m',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The lance shall be made of non-corrosive steel or better material. It shall have a length of at least ____.',
        correct: '1 m',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Pressure gauge shall have an accuracy of ____ of maximum pressure.',
        correct: '± 1%',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The power sprayer shall have a minimum of ____, which are made of non-corrosive material, with each allowing easy cleaning, maintenance and/or replacement.',
        correct: 'two filters',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The filter shall have a mesh of ___ per square centimeter.',
        correct: '100',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The intake hose shall be made of chemical resistant polyvinylchloride or better material with an inside diameter of at least ____. It shall have a filter at the end to prevent possible contaminants from clogging the pump line.',
        correct: '16 mm',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: '(T or F) The material of the hose may be either rubber or synthetic material. If rubber, it shall have one or more plies of fiber reinforcement.',
        correct: 'TRUE',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The tank shall be made of chemical resistant polyvinylchloride or better material with a thickness of at least _____. It shall have a water-tight condition.',
        correct: '6 mm (1/4”)',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The tank cover shall be made of chemical resistant _______ or better material.',
        correct: 'polyvinylchloride',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'There shall be a ground clearance of at least ____.',
        correct: '200 mm',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The power sprayer shall not produce noise higher than ____ measured one meter away from the source of noise.',
        correct: '92 db',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The power sprayer shall have an operating pressure of _______to _______.',
        correct: '1.21 MPa (175 psi) to 1.75 MPa (250 psi)',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'The power sprayer shall have a discharge rate of at least ____.',
        correct: '15 Lpm',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Average diameter of droplets',
        correct: 'mean diameter',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Diameter which divides the number of droplets into two equal halves',
        correct: 'number median diameter',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Distance from the nozzle at which spraying could be carried out',
        correct: 'sprayer range',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Diameter divides the volume of spray into two equal halves',
        correct: 'volume median diameter',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'There shall be at least _____ to conduct the test.',
        correct: 'three (3) trials',
        topic: 'Power Sprayer for Mango'
    },
    {
        question: 'Cab or frame installed on agricultural tractors to protect or minimize injury of the operator from accidental overturning during operation',
        correct: 'roll-over protective structure (ROPS)',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'Point on the central vertical plane of the seat',
        correct: 'seat index point (SIP)',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'Application of a horizontal load to the rear, front and side of the protective structure',
        correct: 'horizontal loading test',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'Application of a dynamic load produced by a block acting as a pendulum',
        correct: 'impact test',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'Mass of the unladen tractor in working order with tanks and radiator full, protective structure with cladding, and any track equipment or additional front-wheel drive components required for normal use',
        correct: 'tractor mass',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'Steel with an as-rolled thickness of not less than _____ and with a carbon content of not less than _____ shall be used in the manufacture of ROPS.',
        correct: '2.5 mm; 0.2 %',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'In case of a cab ROPS, _______ shall be used.',
        correct: 'safety glass',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'The clearance zone assumes a seat adjustment of ______ horizontally and _____vertically from the seat mid-position.',
        correct: '+75 mm horizontally and +30 mm',
        topic: 'Roll-over Protective Structure (ROPS)'
    },
    {
        question: 'pressure measured at a point on the riser with a distance of at least five times the nominal sprinkler inlet diameter from the last upstream direction change or change in pipe cross sectional area',
        correct: 'base pressure',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'aperture of the sprinkler through which the liquid is discharged',
        correct: 'nozzle',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'farthest distance measured from the sprinkler head centerline to a point at which liquid is deposited',
        correct: 'radius of throw',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'device which by its rotating motion around its vertical axis distributes liquid over an area',
        correct: 'rotating sprinkler head/rotating sprinkler',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'The sprinkler shall be located in an area where the surface is smooth or where vegetative growth is less than _____in height. The land shall have a maximum slope of ____.',
        correct: '8 mm; 2%',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'The sprinkler riser shall be made from Schedule __ steel pipe. The riser nominal pipe size shall be the same size as the sprinkler inlet connection.',
        correct: '40',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'The average above ground height of the tops of the 4 collectors near the sprinkler shall either be ____ or ____above the ground. This measurement shall be reported as collector height.',
        correct: '0.9 m or 0.3 m',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'Collectors shall be placed such that the vertical change in height between successive collectors shall not exceed a grade of _____.',
        correct: '2 percent',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'Wind velocity sensing equipment shall be located at a minimum height of ______.',
        correct: '4 m',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'For sprinklers with trajectory height of more than 4 m, the sensor height shall be equal to the highest point of the main stream ______.',
        correct: '+/- 10 percent',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'The maximum distance of the sensor location shall not exceed _____ from the wetted area of the sprinkler under test.',
        correct: '45 m',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'During Field Performance Test, the base pressure shall not vary by more than ____during the test period. Pressure shall be measured and recorded at a point on the riser using pressure measuring devices accurate within ______ of the sprinkler test pressure.',
        correct: 'Both +/- 3 percent',
        topic: 'Rotating Sprinkler Head'
    },
    {
        question: 'volume of fuel consumed by the engine on per hour basis',
        correct: 'fuel consumption',
        topic: 'Seeder and Planter'
    },
    {
        question: 'planting equipment used to deposit seeds in the soil for crop production',
        correct: 'grain seeder',
        topic: 'Seeder and Planter'
    },
    {
        question: 'ratio of effective field capacity to the theoretical field capacity',
        correct: 'field efficiency',
        topic: 'Seeder and Planter'
    },
    {
        question: 'actual rate of being able to plant a given area per unit of time',
        correct: 'effective field capacity',
        topic: 'Seeder and Planter'
    },
    {
        question: 'computed rate of being able to plant a given area per unit of time',
        correct: 'theoretical field capacity',
        topic: 'Seeder and Planter'
    },
    {
        question: 'amount of seeds that can be planted per unit area',
        correct: 'seed delivery rate',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of seeder which deposits the seeds in holes with spacing set by the operator.',
        correct: 'Manually-operated or hand seeder',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of seeder with metering mechanisms driven by the ground wheels or by power take off from a tractor',
        correct: 'Tractor power-driven seeder and planter',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of tractor power-driven seeder which drills and deposits the seeds at a specified rate and depth and in narrow-spaced rows. It cannot deposit the seeds in hills or even in check rows.',
        correct: 'Seed drill',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of tractor power-driven seeder which can deposit the seeds at a specified rate in hills and rows spaced to permit inter-row cultivation and also functions as a seed drill if required.',
        correct: 'Row-crop planter',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of row-crop planter which is designed to deposit one or more seeds in a hill at equal intervals.',
        correct: 'Hill-drop planter',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of row-crop planter which enables operator to perform hill planting at definite spacing (in checks or squares). This facilitates mechanical weed control and other operations.',
        correct: 'Checkrow planter',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This is a type of row-crop planter which is designed to deposit a single seed at equal row intervals.',
        correct: 'Precision planter',
        topic: 'Seeder and Planter'
    },
    {
        question: 'The seeds to be used for this test should be the same as the ones used in metering mechanism test. Each test trial shall be conducted in an area of not less than ______ for manual seeding implement and ______for power-operated seeders.',
        correct: '500 sq. m; 1000 sq. m',
        topic: 'Seeder and Planter'
    },
    {
        question: 'This test shall be conducted for at least ______ test trials for each kind of seed the seeder is suitable.',
        correct: 'two',
        topic: 'Seeder and Planter'
    },
    {
        question: 'system wherein air is used to remove excess heat from the engine through metal fins or shrouds which are located around the cylinder thus creating the flow of air to the engine body in order to maintain its operating temperature',
        correct: 'air-cooled/direct cooling system',
        topic: 'Small Engine'
    },
    {
        question: 'series of events occurring one after the other in a definite order and repeats the events after the last one has occurred',
        correct: 'cycle',
        topic: 'Small Engine'
    },
    {
        question: 'piston requires four movements to complete one cycle',
        correct: 'four-stroke',
        topic: 'Small Engine'
    },
    {
        question: 'piston requires two movements to complete one cycle',
        correct: 'two-stroke cycle',
        topic: 'Small Engine'
    },
    {
        question: 'mechanical device that converts heat energy produced by combustion of fuel into mechanical energy',
        correct: 'engine',
        topic: 'Small Engine'
    },
    {
        question: 'type of engine where the combustion of fuel takes place inside the cylinder',
        correct: 'internal combustion engine',
        topic: 'Small Engine'
    },
    {
        question: 'engine in which combustion is achieved by compressing the air until a high temperature is achieved to initiate combustion of fuel',
        correct: 'compression ignition engine/diesel engine',
        topic: 'Small Engine'
    },
    {
        question: 'engine in which combustion occurs through the initiation of a spark on the compressed fuel and air mixture',
        correct: 'spark ignition engine/gasoline engine',
        topic: 'Small Engine'
    },
    {
        question: 'arrangement of valves wherein the intake and exhaust valves are located in the cylinder head',
        correct: 'overhead valve (OHV)/I-head arrangement',
        topic: 'Small Engine'
    },
    {
        question: 'arrangement of valves wherein the intake and exhaust valves are located on one side of the cylinder block',
        correct: 'side valves (SV)/L-head arrangement',
        topic: 'Small Engine'
    },
    {
        question: 'system in which water/liquid-coolant serves as the cooling medium which circulates in the water jackets to absorb the heat of the engine',
        correct: 'water-cooled/ liquid-cooled/ indirect cooling system',
        topic: 'Small Engine'
    },
    {
        question: 'diameter of the cylinder',
        correct: 'bore',
        topic: 'Small Engine'
    },
    {
        question: 'ratio of the cylinder volume on top of the piston (piston displacement and combustion chamber) when it is at its lowest position to the volume remaining above the piston when it is at its highest position (combustion chamber)',
        correct: 'compression ratio',
        topic: 'Small Engine'
    },
    {
        question: 'power recommended by the manufacturer for satisfactory operation under continuous duty condition within a specified speed range',
        correct: 'continuous brake power',
        topic: 'Small Engine'
    },
    {
        question: 'mechanical device that converts heat energy produced by combustion of fuel into mechanical energy',
        correct: 'engine/heat engine',
        topic: 'Small Engine'
    },
    {
        question: 'maximum brake power, fuel consumption and operating characteristics of the engine at different speeds',
        correct: 'engine performance',
        topic: 'Small Engine'
    },
    {
        question: 'engine equipped with all the accessories necessary to perform its intended functions such as',
        correct: 'fully equipped engine',
        topic: 'Small Engine'
    },
    {
        question: 'highest power developed at a given speed',
        correct: 'maximum brake power',
        topic: 'Small Engine'
    },
    {
        question: 'power output of a “fully equipped” engine',
        correct: 'net power',
        topic: 'Small Engine'
    },
    {
        question: 'highest power developed',
        correct: 'peak brake power',
        topic: 'Small Engine'
    },
    {
        question: 'power indicated in the specification sheet or plate at a given rated speed submitted by the manufacturer',
        correct: 'rated brake power',
        topic: 'Small Engine'
    },
    {
        question: 'speed in revolutions per minute specified by the manufacturer  ',
        correct: 'rated engine speed',
        topic: 'Small Engine'
    },
    {
        question: 'quantity of fuel consumed by an engine on the basis of per horsepower hour',
        correct: 'specific fuel consumption',
        topic: 'Small Engine'
    },
    {
        question: 'product of the force and the perpendicular distance from the line of action of that force to the axis of rotation and is expressed in kg-m',
        correct: 'torque',
        topic: 'Small Engine'
    },
    {
        question: 'At least ___ of the rated maximum output power shall be attained during the varying load test.',
        correct: '80%',
        topic: 'Small Engine'
    },
    {
        question: 'The engine shall have no breakdowns/malfunctions (i.e. overheating, failure of components, etc) during ___-hr continuous running test.',
        correct: '5',
        topic: 'Small Engine'
    },
    {
        question: 'The noise emitted by the engine measured 50 mm away from the operator’s ear level shall not be more than ___db (A)',
        correct: '92',
        topic: 'Small Engine'
    },
    {
        question: 'The temperature of the inlet air to the engine (ambient air), shall be measured not more than ___m from the point of entry to the air cleaner or if no air cleaner is used, from the air inlet horn.',
        correct: '0.15',
        topic: 'Small Engine'
    },
    {
        question: 'The engine speed during a run or reading shall not deviate from the selected speed by more than _____or _____, whichever is greater.',
        correct: '+/- 1% or +/- 10 rpm',
        topic: 'Small Engine'
    },
    {
        question: 'To establish points on the curve, runs shall be made at increments not greater than ___ rpm throughout the speed range.',
        correct: '200',
        topic: 'Small Engine'
    },
    {
        question: 'The lowest speed at which measurements are to be made shall be at ____rpm. In case the engine cannot be operated at this speed, it shall be at the lowest speed the engine can operate.',
        correct: '600',
        topic: 'Small Engine'
    },
    {
        question: 'Sounds emitted by the engine shall be measured _____ away from the exhaust pipe and at a height of _____ from the ground.',
        correct: '7.5 m; 1.2 m',
        topic: 'Small Engine'
    },
    {
        question: 'If the continuous rated speed and power is not specified by the manufacturer, the engine shall be operated at ___ of the observed peak brake power and shall be run continuously on the bench for five hours.',
        correct: '80%',
        topic: 'Small Engine'
    },
    {
        question: 'In Continuous running test, The engine shall be run continuously for _____ at the continuous speed and power specified by the manufacturer. If the engine cannot attain this power, it shall be set at the maximum power the engine can attain at its specified continuous speed.',
        correct: 'five hours',
        topic: 'Small Engine'
    },
    {
        question: 'In Continuous running test, Data shall be taken every ____ minutes.',
        correct: '30',
        topic: 'Small Engine'
    },
    {
        question: 'Implement consisting of long, flat and curved teeth made of spring steel.',
        correct: ' Spring-tooth harrow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of field cultivator wherein mainframe is mounted on the front of the tractor.',
        correct: 'Front mounted',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Machine designed for transplanting rice seedlings into a puddled and leveled field.',
        correct: 'Mechanical rice transplanter',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Total force parallel to the direction of travel required to move the implement.',
        correct: 'Draft',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Based on PAES 117: 2000 small engine methods of test, how many hours shall the engine run continuously with continuous speed and power specified by the manufacturer. ',
        correct: 'five',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement performing shallow post-plant tillage to aid the crop by loosening the soil and/or by mechanical eradication ofundesired vegetation.',
        correct: 'Cultivating tillage implement',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Implement consisting of tool bars that extend across the top of the rows, which allow lateral adjustments of the tools fordifferent row spacing.',
        correct: 'Continuous-tool bar cultivator',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement consisting of tool bars that drop down between the rows to provide maximum vertical clearance for the plants.',
        correct: 'Separated gang cultivator',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES Walking-type AgriculturalTractor (rotary tilling-type), the noise emitted by the tractor measured 50 mm away from the operator’s ear level shall not bemore than?',
        correct: '92 db (A)',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Soil-handling implements which forms uniform ridges of soil to predetermined shapes',
        correct: 'Bed shaper',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Soil-working tool, consisting of an edge and a surface, which is primarily designed to cut through the soil.',
        correct: 'Blade',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Circular, flat tool used to cut plant material and soil.',
        correct: 'Coulter',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Force to propel an implement in the direction of travel which is equal and opposite to drawbar pull.',
        correct: 'Draft',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Portion of an implement designed to connect the implement to a power source.',
        correct: 'Hitch',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Miniature plow attachment whose purpose is to turn over a small furrow slicedirectly ahead of the main moldboard plow bottom, to aid in covering trash.',
        correct: 'Jointer',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Soil profile modified by tillage or amendments for use by plant roots',
        correct: 'Root bed',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' PAES 124: 2002 walking-type agricultural tractor – Part 3: special type(float-assist tiller), what is the recommended peak transmission efficiency ofthe tractor?',
        correct: '80%',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Part of the soil profile exploited by the roots of plants.',
        correct: 'Root zone',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 118: 2001 four-wheel tractor, the tractor shall be able to pull field implements up to what speed?',
        correct: '8 km/h',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage in which a narrow curved shank is used.',
        correct: 'Chisel plowing',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Component of the power sprayer used to regulate the pressure.',
        correct: 'Pressure relief valve',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of force type hand pump that discharges water only on the forward stroke of the piston or plunger and draw in waterinto the cylinder during the back stroke.',
        correct: 'Single acting',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of power sprayer mounted on wheels, either pushed by an operator ortowed by a vehicle. The pump can be powered by an engine or an electric motor.',
        correct: 'Wheel-mounted power sprayer',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'PAES 159:2011 Agricultural Machinery',
        correct: 'Sugarcane Planter – Specifications',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Sugarcane stalks containing buds used as planting mat.',
        correct: 'Sugarcane billet',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES119: 2001 four-wheel tractor – methods of test, what is therecommended noise emitted by the tractor measured 50 mm away from the operator’s ear level?',
        correct: 'Shall not be more than 92 db (A)',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Operation which pulverizes, smoothens, and makes the soil ready for planting.',
        correct: 'Harrowing',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Based on PAES 132: 2004 Disc/Moldboard Plow – Methods of Test, what is the required travelling speed during operation for two-wheel tractor-drawn plows?',
        correct: '3 kph to 4 kph',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Operation wherein a lister is used in a manner that forms a furrow midway between two previous rows of plants',
        correct: 'Middlebreaking',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Plow bottom that has less curvature than the stubble and can be used easily forstubble, ordinary trash and stalk cover land.',
        correct: 'General-purpose moldboard',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Plow bottom that has long, narrow and less sloping moldboard with a gradual twist that allows complete inversion of the furrow slice with minimum breakage.',
        correct: 'Sod moldboard',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Working part of the plow which includes the share, moldboard, and landside, all attached to the frog.',
        correct: 'Plow bottom',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of plow mounted on the tractor’s three-point linkage and depends upon the tractor for its general operation.',
        correct: 'Tractor-mounted moldboard plow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of plow hitched to the drawbar or lower links of the tractor, supported by two or three wheels and equipped with hydraulic lines and cylinders for lifting and/or depth control.',
        correct: 'Trailing moldboard plow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 112: 2000 Lever-Operated Knapsack Sprayer, the overall weight of the sprayer with its component parts, when fully loaded with water shall not exceed how many kilograms?',
        correct: '22',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Serves as an adaptor of the drill bit and conduit of water jet channel.',
        correct: 'Drilling pipe',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' A type of drilling rig in which the mode of drilling is done by using arotating drill bit that cut and loosen the soil thus producing a hole of required diameter.',
        correct: 'Rotary',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'A type of drilling rig in which the mode of drilling is done by alternately raising and dropping either an external weight (solid steel or wood) or the drilling stem itself, causing the impact ofthe drill bit to the soil, thus producing ahole of required diameter.',
        correct: 'Percussion',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Based on PAES 118: 2001 four-wheel tractor, what is the allowable wheel slipfor maximum efficiency for two-wheel drive tractor at tilled or soft soil.',
        correct: '10-15',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'A type of drilling rig in which the mode of drilling is done by rotary action and percussion.',
        correct: ' Combination',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Type of hand pump intended for use in lifting water from low-head cisterns and wells, the depth of which is not beyond the head furnished by atmospheric pressure.',
        correct: 'Lift type',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Part of granule applicator where granules are loaded.',
        correct: 'Hopper',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'PAES 163:2011 agricultural machinery',
        correct: 'Spring-tooth harrow – specifications',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'PAES 166:2011 Agricultural Machinery',
        correct: 'Granule Applicator – Methods of Test',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Secondary tillage implement consisting of long and curved teeth made of spring steel which are fastened on the transverse toolbars with the other end pointed to give good soil penetration.',
        correct: 'Spring-tooth harrow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Four-wheel tractor speed limit on paved road in kph.',
        correct: '15 to 20',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 112: 2000 Lever-Operated Knapsack Sprayer, the flow rate from the nozzle using water and the nozzles provided, shall lie in the range of 0.3 to1.4 L/min. at what mean pressure?',
        correct: '300 kPa',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage of an entire area as contrasted to a partial tillage as in bands or strips.',
        correct: 'Broadcast tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage action and transport operations utilized to loosen, load, carry, and unload soil.',
        correct: 'Earthmoving',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' PAES 128: 2002 drilling rig – methods of test, the drilling rig shall be operated for at least 100 mm diameter of bore hole and minimum depth of how many meters?',
        correct: '30',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage operation which move soil to establish a desired soil elevation and slope.',
        correct: 'Land grading',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage operation which are oriented in specific paths or directions with respect to the sun, prevailing winds, previous tillage actions, or field base lines.',
        correct: 'Oriented tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Shallow tillage operation performed to promote growth of crop plants by creating a soil condition conducive to aeration, infiltration, and moisture conservation or to pest control.',
        correct: 'Soil cultivation',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Mechanical manipulation of soil for any desired purpose.',
        correct: 'Tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Based on PAES 124: 2002 walking-type agricultural tractor – Part 3: special type(float-assist tiller), what is the recommended noise emitted by the tractor measured 50 mm away from the operator’s ear level?',
        correct: 'Shall not be more than 92 db (A)',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage, which constitutes the initial major soil-working operation, normally designed to reduce soil strength, cover plant materials, and rearrange aggregates.',
        correct: 'Primary tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Tillage, following primary tillage, which is designed to control weed growth and to create specific soil surface configurations before seeding.',
        correct: 'Secondary tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'System traditionally performed in preparing a seedbed for a given crop and grown in a given geographical area.',
        correct: 'Conventional tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'System wherein least soil manipulation is performed.',
        correct: 'Minimum tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'System in which tillage of the total soil surface is performed in such a way that plant residue is specifically left onor near the soil surface.',
        correct: 'Mulch tillage',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement which shatters the soil without complete burial or mixing of surface materials.',
        correct: 'Chisel plow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement which cuts, partially or completely inverts a layer of soil to burysurface materials, and pulverizes the soil.',
        correct: 'Moldboard plow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tool attached to the shank of the subsoiler to cut through the soil.',
        correct: 'Shank',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Series of hills in a field.',
        correct: 'Rows',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Scratching, cutting, or abrasing of materials caused by the action of soil.',
        correct: 'Soil abrasion',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Lever that connects the pump rod to the pump head which often includes some mechanism to add counter weight to balancethe weight of the water being lifted up the draw pipe.',
        correct: 'Handle',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Part of the mist blower that connects the nozzle to the blower.',
        correct: 'Wand',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Part of the cylinder that is connected to the pump rod and which forces water up the draw pipe.',
        correct: 'Plunger/piston',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Type of sugarcane planter that is capable of chopping sugarcanes into billets which are dropped into the furrows.',
        correct: 'Semi-automatic sugarcane planter',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 118: 2001 four-wheel tractor, what is the allowable wheel slipfor maximum efficiency for two-wheel drive tractor at firm soil.',
        correct: '7-11%',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Eliminates back and dead furrows and is used for surface irrigation.',
        correct: 'Two-way plow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement for intermittent tillage at depths sufficient to shatter compacted subsurface layers.',
        correct: 'Subsoiler',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 112: 2000 Lever-Operated Knapsack Sprayer Method of test, the pumping rate shall not exceed how manystrokes/min?',
        correct: '40',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Consists of two gangs wherein one gang is located behind the other at an angle and the harrow is operated in an offset position in relation to the tractor.',
        correct: 'Offset disc harrow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement used for seedbed preparation which crushes soil clods and smooths and firms the soil surface.',
        correct: 'Roller-harrow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 118: 2001 four-wheel tractor, what is the allowable wheel slipfor maximum efficiency for four-wheel drive tractor at tilled or soft soil.',
        correct: '8-13',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Implement wherein the frame and cultivating tools are designed to adequately pass through standing crop rows without crop damage.',
        correct: 'Row crop cultivator',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Machine used to apply, or to apply and incorporate soil additives by means of tillage.',
        correct: 'Soil-additive applicator',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Based on PAES 132: 2004 Disc/Moldboard Plow – Methods of Test, what is the required travelling speed during operationfor four-wheel tractor-drawn plows?',
        correct: '5 kph to 6 kph',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Portions of tillage tools which are designed to be in contact with the soil.',
        correct: 'Soil-working surface',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Tillage tools which present a reasonable constant boundary area to the soil.',
        correct: 'Multi-powered tillage tools',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Scratching, cutting, or abrading of materials caused by the action of soil.',
        correct: 'Soil abrasion',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Resistance to the movement of plant parts or tillage tools through soil that is caused by the mechanical strength of the soil.',
        correct: 'Mechanical impedance',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'PAES 160:2011 Agricultural Machinery',
        correct: 'Sugarcane Planter – Specifications',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of soil auger that makes use of human force to drill the soil.',
        correct: 'Hand-operated type',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'PAES 155:2010 Agricultural Machinery',
        correct: 'Mist Blower – Methods of Test',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Fine drops of liquid, such as water or chemical pesticide, sprayed into the air.',
        correct: 'Mist',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of soil auger that is powered by either pneumatic or hydraulic pump to drill the soil.',
        correct: 'Fluid-powered',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'PAES 162:2011 agricultural machinery',
        correct: 'Soil auger – methods of test',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of granule applicator designed for handheld operation. It makes use of screw or spinner plate operated manually to facilitate metering of granules.',
        correct: 'Handheld granule applicator',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Raised ridge left at the center of the strip of land, when plowing is started from center to side.',
        correct: 'Furrow crown',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Trench left when the plow bottom cuts and turns the furrow slice.',
        correct: 'Furrow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Sliding implement that cuts, lifts, inverts and throws to one side a layer ofsoil (furrow slice) to bury surface materials.',
        correct: 'Moldboard plow',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 116: 2001 small engine, the noise emitted by the engine measured 50mm away from the operator’s ear level shall not be more than?',
        correct: '92 db',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Two-wheel tractor speed limit on bare dirt road in kph.',
        correct: '4 to 6',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Based on PAES 133: 2004 disc harrow – methods of test, what is the travelling speed to be maintained during operation?',
        correct: '7 kph to 8 kph',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of weeder with rectangular, triangular or crescent shapes with cutting edges sharpened and hardened.',
        correct: 'Blade type',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Type of weeder with a straight, curved, round or square cross-section steel rods with sharply pointed and hardened soil engaging ends.',
        correct: 'Tine type',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: ' Type of weeder which utilize either blade or tine type of soil working parts with short (0.15 m to 0.5 m), medium (>0.5m to 1 m) and long (>1 m) handles.',
        correct: 'Hand-held weeder',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Type of weeder which utilizes either blade, tine or rotary soil working parts for dry and wet field weeding.',
        correct: 'Push-type weeder',
        topic: 'PAES 101 to PAES 166 AGRICULTURAL MACHINERY'
    },
    {
        question: 'a mixture of cement, sand, gravel, and other inert materials, and water to harden to form of the shape and dimension of the desired structures. ',
        correct: 'Concrete',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is a powder that when mixed with water can be a good binder for sand or gravel into a hard solid mass.',
        correct: 'Cement',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'it is a mixture  of cement, sand, and water used for laying bricks or masonry; It is too weak to be used as materials for building.',
        correct: 'Mortar',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'should be clean and free from injurious amount of oil, acids, alkali, organic materials, or other deleterious substances.',
        correct: 'Mixing Water',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a materials held together by the paste formed of cement and water.',
        correct: 'Aggregates',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'crushed stone, sand, crushed gravel with 5 mm diameter and below.',
        correct: 'Fine aggregates',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'crushed stone, crushed gravel or gravel with diameter above 5 mm.',
        correct: 'Coarse aggregate',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'structural member of reinforced concrete placed horizontally over openings to carry load.',
        correct: 'Concrete Beam',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a vertical structural member made of reinforced or unreinforced concrete.',
        correct: 'Concrete Column',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a solid or hollow blocks\ of precast concrete.',
        correct: 'Concrete Block',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a flat, reinforced concrete structural member, relatively suitable in length and width but shallow in depth used for floors, roofs, and bridged deck.',
        correct: 'Concrete Slab',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'concrete with high silica content and used for heat insulator for furnaces and other heat generating device.',
        correct: 'Refractory Cement',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'is name for walls, pillars, arches, and other structures by laying bricks, stone blocks, and other stone like materials such as hallow blocks.',
        correct: 'Masonry',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'it is wide used reiforcing materials\ for almost all types of concrete construction.  It is an excellent partner of concrete in resisting both tension and compression load and hundred times stronger in tensile strength.',
        correct: 'Steel',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'the structural reinforcing member that holds or binds together the main reinforcement of a beam or girder to a designed position.',
        correct: 'Stirrups',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a fibrous substance which composed the trunk and branches of the tree that lies between the pith and the bark.',
        correct: 'Wood',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'wood after it is sawed or sliced into boards, planks, timber, etc.',
        correct: 'Lumber',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'unplaned or undressed lumber',
        correct: 'Rough Lumber',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'planed lumber having at least one smooth side.',
        correct: 'Surfaced or Dressed lumber',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'dressed lumber wherein the number connotes the number of smooth sides.',
        correct: 'S2S ; S4S',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'the kind of rough lumber which is cut tangent to the annual rings running the full length of the log and containing at least one flat surface.',
        correct: 'Slab',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a wide piece of lumber five inches or 13 cm or larger in its smallest dimension',
        correct: 'Timber',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'is a wide piece of lumber from 4 to 13 cm thick',
        correct: 'Plank',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a piece of lumber less than 4 cm thick with at least 10 cm wide.',
        correct: 'Board',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a thick piece of lumber',
        correct: 'Flitch',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'annual rings are small the grain or marking which separates the adjacent rings',
        correct: 'Fine grained',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'large grain',
        correct: 'Coarse grain',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'when the direction of the fibers are near  parallel with the side and edges of the board.',
        correct: 'Straight Grained',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'when a lumber is taken from a crooked tree.',
        correct: 'Crooked or Cross-Grained',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'are most preferred in building construction which grows larger by addition of layer on the surface each year. ',
        correct: 'Exogenous trees',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a mixture of a pigment and vehicle such as oil or water that together form a liquid or paste that can be applied to a surface to provide an adherent coating that imparts color to and often protects the surface.',
        correct: 'Paint',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a liquid paste formulation used to remove paint, varnish, enamel, or laquer.',
        correct: 'Paint Remover',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a post which supports a handrails and encloses the open sections of a stairway.',
        correct: 'Baluster',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a level stage in a shaft at which cages are laoded and discharged',
        correct: 'Landing',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'a board placed vertically beneath the tread of a step in stair case.',
        correct: 'Riser',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'is the height of a flight of stairs from landing to landing.',
        correct: 'Rise',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'the horizontal distance from the first to the last riser of stair flight ',
        correct: 'Run',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'A type of cement specificed when high early strength is required',
        correct: 'Rapid hardening portland cement',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'any premise or yard used for the confinement of animals awaiting to be slaughtered which include unloading ramp, pens and detention pens',
        correct: 'lairage',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'refers to sheep, goat, and deer',
        correct: 'small animals',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'refers to cattle and carabao',
        correct: 'large animals',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'separate compartment in the lairage used to confine sick or suspected animals',
        correct: 'detention pen',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'animals are free to move in a pen while awaiting to be slaughtered',
        correct: 'loose type',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'pugnacious animals are tied within the pen while awaiting to be slaughtered',
        correct: 'tie-up type',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'building or place used for killing of animals where the flesh is intended for human consumption',
        correct: 'slaughterhouse',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'compartment which is suitable for confining only one animal at a time while it is being stunned and which is so constructed as to confine, without discomfort, to prevent any substantial movement of the animal forward, backward or sideway',
        correct: 'stunning pen',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'renders an animal insensible before it is killed',
        correct: 'stunning',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'insertion of a rod or coiled wire through the hole in the skull of cattle made by the captive blot to destroy the brain and spinal cord to prevent reflex muscular action and possible injury to operatives',
        correct: 'pithing',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'severance of the major blood vessels in the neck or immediately anterior to the heart by means of a knife and “stuck” shall be constructed accordingly.',
        correct: 'sticking',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'remove as much blood from the carcass as possible before further handling',
        correct: 'bleeding',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'lowering of animal into steam to prepare skin for dehairing',
        correct: 'scalding',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'removal of the hair of the carcass',
        correct: 'dehairing',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'suspending the carcass for particular operation',
        correct: 'gambrelling',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'cleaning the carcass by burning the hair',
        correct: 'singeing',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'process of removing the internal organs in the abdominal and thoracic cavities',
        correct: 'evisceration',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'preparation of carcass after evisceration, ready for storage or sale',
        correct: 'dressing',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'dividing carcass into parts',
        correct: 'splitting',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'all parts including viscera of slaughtered cattle, sheep, goats or swine that may be used for human consumption',
        correct: 'carcass',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'edible part of the muscle of cattle, sheep, goats or swine',
        correct: 'meat',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'part of internal organs of a slaughtered animal',
        correct: 'offal',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'digestive tract of ruminants such as the stomach, or the intestines which still contain fecal matter',
        correct: 'green offal',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'digestive tract of swine such as the stomach, or the intestines which still contain fecal matter',
        correct: 'black offal',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'meat requiring further examination as declared by a veterinary inspector after veterinary examination',
        correct: 'detained meat',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'meat which is unfit for human consumption as declared by a veterinary inspector after veterinary examination',
        correct: 'condemned meat',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'black or green offal',
        correct: 'gut and tripe',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'building used for storing paddy or rice and other grains in bags',
        correct: 'warehouse',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'storing of paddy or corn kernels in bags usually made of jute (gunny) or polyethylene and normally accommodates 44-45 kilos',
        correct: 'bag storage',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'paddy; rough rice; unhulled grain or Oryza sativa L., that is grain with the hull/husk enclosing the grain',
        correct: 'palay',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'process of using chemicals to control insects in grains in a form of fumes',
        correct: 'fumigation',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'amount of moisture in the grain expressed as percentage of the total weight of the sample, wet basis',
        correct: 'moisture content',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'pallet; “tarima”; wooden frames used on concrete floors for stacking bags to prevent direct contact between the grains and the floor',
        correct: 'dunnage',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'moving of air through stored grains at low airflow rates (generally between 0.07-0.28 cubic meter per minute per ton) for purposes other than drying, to maintain or improve it quality',
        correct: 'aeration',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mature male goat',
        correct: 'buck',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mature female goat that has kidded',
        correct: 'doe',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'doe without milk',
        correct: 'dry doe',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'young goat under six months old of either sex',
        correct: 'kid',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mature female sheep that has already lambed',
        correct: 'ewe',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'sheep under six months of age',
        correct: 'lamb',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mature male sheep',
        correct: 'ram',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'area with its physical facilities used for cattle fattening',
        correct: 'feedlot',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'breeding male of any age',
        correct: 'bull',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'young male or female under one year of age',
        correct: 'calf',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mature female that has already calved',
        correct: 'cow',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'female between two to three years of age which has not given birth',
        correct: 'heifer',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'enclosure for confining and handling livestock',
        correct: 'corral',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'pen for confining animals from the pasture',
        correct: 'holding pen',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'pen used to funnel cattle into the working chute',
        correct: 'crowding pen',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'chute leading the cattle from the crowding pen to the holding chute/squeeze',
        correct: 'working chute',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'squeeze; use to restrain animals',
        correct: 'holding chute',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'chute used to load cattle from working chute or crowding pen to a vehicle',
        correct: 'loading chute',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'animals are free to move between resting, feeding and watering areas',
        correct: 'loose housing',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'one to two-year-old cattle of either six',
        correct: 'yearling',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'act of giving birth',
        correct: 'parturition',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'area with its physical facilities used for carabao fattening ',
        correct: 'feedlot',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mature female that has already calved',
        correct: 'caracow',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'female carabao below two years of age which has not yet calved ',
        correct: 'caraheifer',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'plant used to process animal wastes or manure to produce biogas and sludge consisting of an inlet/mixing tank, digester, gas chamber and outlet/ sludge tank',
        correct: 'biogas plant',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mixture of gas (composed of 50 to 70 percent methane and 30 to 40 carbon dioxide) produced by methanogenic bacteria',
        correct: 'biogas',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'biogas plant where the digester and gas chamber from one unit',
        correct: 'integrated plant',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'digester and gas chamber form separate units ',
        correct: 'split-type plant',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'plant with series of digester',
        correct: 'multi-digester plant',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'plant consisting of digester and a moving, floating gasholder that either float directly in the fermenting slurry or in a separate water jacket',
        correct: 'floating type',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'closed digester with an immovable, rigid gas chamber and a displacement pit',
        correct: 'fixed type',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'plant consisting of a heat-sealed plastic or rubber bag (balloon), combining digester and gasholder',
        correct: 'balloon type',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'serves as conveyor of the manure-water mixture or slurry from the mixing tank to the digester',
        correct: 'inlet pipe',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mixture of manure and water',
        correct: 'slurry',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'holding tank; chamber where manure and water are collected, stored and separated from heavy and non-biodegradable materials before feeding them into the digester',
        correct: 'collecting tank',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'biodigester; bio-reactor; anaerobic reactor; any water and air tight container designed for the process of anaerobic microbiological degradation of organic matter into which the slurry is introduced for digestion and methanization',
        correct: 'digester',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'digestion; various processes that take place among the methanogens, non-methanogens and substrates fed into the digester as inputs',
        correct: 'methanization',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'anaerobic bacteria that act upon organic materials and in the process, produce biogas',
        correct: 'methanogens',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'space inside or outside the digester for the collection and storage of biogas',
        correct: 'gas chamber',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'mixer; agitator; mechanical device inside the digester used to stir the slurry',
        correct: 'stirrer',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'serves as conveyor where the effluent or the slurry is forced out',
        correct: 'outlet pipe',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'residue that comes out at the outlet after the substrate is digested/processed inside the digester',
        correct: 'effluent',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'amount of slurry fed per unit volume of digester capacity per day',
        correct: 'loading rate',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'layer of compacted soil and gravel to support the digester wall',
        correct: 'backfill',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'average period that a given quantity of slurry is retained in the digester for digestion',
        correct: 'retention time',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'temperature range of 20°C – 40°C where mesophilic bacteria operates',
        correct: 'mesophilic temperature rage',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'amount of biogas produced per day per cubic meter of slurry',
        correct: 'gas production rate',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'organic material used to produce biogas',
        correct: 'substrate',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'layer of floating material (mainly fibrous) on the slurry',
        correct: 'scum',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'settled portion or precipitate of the slurry; a mud-like, semi-solid mass',
        correct: 'sludge',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'difference in height between the digester wall and the filling line',
        correct: 'freeboard',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'level of slurry when the digesters is at full load',
        correct: 'filling line',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'cantilever beam that holds the gasholder/movable cover in position at the desired biogas pressure',
        correct: 'gasholder retainer',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'structure that provide a reliable enclosure within which an environment favorable to plant growth can be attained',
        correct: 'greenhouse',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'gutter connected; method of greenhouse construction where modular roof units are connected at the eave by a common gutter',
        correct: 'ridge and furrow greenhouse',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'removal of heat from the interior of the greenhouse',
        correct: 'cooling',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'addition of heat to the interior of the greenhouse from any energy source including the sun',
        correct: 'heating',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'prevents excess solar radiation in the greenhouse',
        correct: 'shading',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'process of exchanging air inside the greenhouse with outside air to control temperature, humidity, oxygen or carbon dioxide levels',
        correct: 'ventilation',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'ventilation of greenhouse using fans',
        correct: 'mechanical ventilation',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'ventilation of greenhouse which occurs through controlled openings due to natural pressure variations inside and outside the greenhouse',
        correct: 'natural ventilation',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is an area where farm houses are located and considered as the center of farm enterprise',
        correct: 'Farmstead',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Movable buildings are small, lightweight, and constructed with skids so that it can be moved around the farm.',
        correct: 'Movable or fixed',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Pre-fabricated buildings are built from units that are constructed in a factory.',
        correct: 'Pre-fabricated or on-the-site construction',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'This has to do with response to the stresses and strains created when it is loaded.',
        correct: 'Strength of Materials',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Materials are considered durable if they remain their strength and other properties over a considerable period of time.',
        correct: 'Durability',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the resistance to indentation.',
        correct: 'Hardness',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the capacity of a material to resist fracture under impact loading',
        correct: 'Toughness',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the quality of absorbing impact loads without passing the elastic limit.',
        correct: 'Resilience',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the resistance of the material against impairment resulting from use.',
        correct: 'Wear resistance',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is a characteristic of materials which measures the ease with which it can be worked or shaped.',
        correct: 'Workability',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the degree to which a material resists chemical combination with other materials with which it comes in contact',
        correct: 'Resistance to Corrosion',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Resistance to heat transfer',
        correct: 'Thermal Characteristics',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Dimensional changes in materials frequently are quite destructive; many service faults can be traced to dimensional changes.',
        correct: 'Dimensional Changes',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the resistance of the material to the passage of liquid through capillary or hygroscope action.',
        correct: 'Imperviousness',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is important for materials for surfacing walls, floors, ceilings, counter tops, etc.',
        correct: 'Ease of Cleaning',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Embodies color, texture, form and line.  ',
        correct: 'Appearance',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'It is the property of the material to reduce noise level',
        correct: 'Acoustical Properties',
        topic: 'Agricultural Building and Infrastructure'
    },
    {
        question: 'Application, use, and management of various agricultural machines, tools, and equipment used for production and post-production operation.',
        correct: 'Agricultural Machinery',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Development, manufacture and extension of appropriate agricultural tools, implements, and machinery using animal, human, mechanical, electrical, and other renewable sources of energy for agricultural production and development and post harvest operations.  ',
        correct: 'Agricultural Mechanization',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'equipment designed primarily for agricultural field operation. ',
        correct: 'Agricultural Field Equipment',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'includes plow and harrow used to prepare the land to make it ready for seeding and planting operation ',
        correct: 'Tillage Equipment',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'used to place seeds or plant parts into the prepared seedbed',
        correct: 'Seeding and Planting Equipment',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'includes cultivating.  weeding, spraying, dusting, as well as irrigation equipment aim to make sure that the crop grows to produce its potential yield.  ',
        correct: 'Crop Maintenance Equipment',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'used to gather and separate the produced from the panicles and make it ready for primary processing operation',
        correct: 'Harvesting and Threshing Equipment',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'produce one or several types of farm machinery and usually do not sell other items from other manufacturers',
        correct: 'Manufacturers',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'manufacture their own line of items but also sell either consigned items such as single cylinder engines, pumps, pump set, and other types of farm machines',
        correct: 'Manufacturers-Dealers',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'carries several items and brands from varying sources and are not usually engaged in manufacture and fabrication of agricultural machines',
        correct: 'Dealers',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'They are single element that are not combined with any other chemical element.',
        correct: 'Pure Metal',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'They are mixture of two or more metal to produce new metal. Example are stainless steel, bronze, etc',
        correct: 'Alloys',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'a pure ferrite',
        correct: 'Iron',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'produced from ore of hematite or magnetite in the blast furnace by melting with limestone and coke',
        correct: 'Pig iron',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'with carbon content of 1.7 to 6/7%, low cost, good casting property, high compressive strength, high wearing resistance, brittle and lower tensile strength',
        correct: 'Cast Iron',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'molten steel that is cast into an ingot and then rolled, forged, hammered, pressed, or machine into desired shape',
        correct: 'Steel',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'commonly used as machine elements and frame',
        correct: 'Structural steel, steel bars and cylinder, and steel plate',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Durable to shock because the mild steel in the center layer is deformable and is higher wear resistance than hard steel at the outer side; usually used for moldboard and share of a plow.',
        correct: 'Soft Centered Steel ',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'carbon content not exceeding 0.25%.',
        correct: 'Low Carbon Steel',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'contains 0.25 to 0.50% carbon.  They are usually used in making structural and machinery steel.',
        correct: 'Medium Carbon Steel',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'carbon content is above 0.50%.  They are usually used in the manufacture of spring and tool steel',
        correct: 'High Carbon Steel',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'it is strong as a casting and is used for cylinder head and piston. ',
        correct: 'Y alloy (4%Cu, 2% Sn alloy)',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'casting metal used for cylinder head and crankcase.',
        correct: 'Silmin (14% Si alloy)',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'quenched at high temperature and then aged to gradually increase strength and hardness. ',
        correct: 'Duralumin (4% Cu, 0.5-1.5% Mg, 0.4 Mn alloy)',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'a piece of  metal which has been rolled into a sheet of 3/16 in. or less in thickness.  ',
        correct: 'Sheet',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'a long sheet of metal that is less than 12 in. wide',
        correct: 'Strips',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'a metal with thickness over 3/16 in. Commonly available size is 4’ wide x 8’ long.  Thickness are given in terms of mm or in inch.',
        correct: 'Plate',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Machinery And Equipment'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'Agricultural Electrification And Instrumentation'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'PAES 201 to PAES 259 AGRICULTURAL MACHINERY'
    },
    {
        question: 'Question',
        correct: 'Answer',
        topic: 'ABE LAW'
    },

    // Add more questions here as needed
];

let currentQuestionIndex = 0;
let filteredQuestions = []; // Initialize an empty array for filtered questions
let quizMode = 'manual'; // Default mode is manual
let timerInterval; // Variable to hold the interval ID for timer

const introContainer = document.getElementById('intro-container');
const quizContainer = document.getElementById('quiz-container');
const startQuizButton = document.getElementById('start-quiz-btn');
const topicSelect = document.getElementById('topic-select');
const questionIndicator = document.getElementById('question-indicator');
const questionElement = document.getElementById('question');
const previousButton = document.getElementById('previous-btn');
const nextButton = document.getElementById('next-btn');
const revealButton = document.getElementById('reveal-btn');
const correctAnswerElement = document.getElementById('correct-answer');
const homeButton = document.getElementById('home-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsCloseBtn = settingsModal.querySelector('.close');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const automaticModeRadio = document.getElementById('automatic-mode');
const manualModeRadio = document.getElementById('manual-mode');
const settingsBtn = document.getElementById('settings-btn');
const timerIndicator = document.querySelector('.timer-indicator');
const navigationButtons = document.querySelector('.navigation-buttons'); // Navigation buttons container

// Populate topic select options dynamically
function populateTopicSelect() {
    const topics = ['All'];
    questions.forEach(question => {
        if (!topics.includes(question.topic)) {
            topics.push(question.topic);
        }
    });
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic.replace(/-/g, ' ');
        topicSelect.appendChild(option);
    });
}

populateTopicSelect();

// Function to filter questions by selected topic
function filterQuestionsByTopic(topic) {
    if (topic === 'All') {
        return questions;
    } else {
        return questions.filter(question => question.topic === topic);
    }
}

// Function to handle quiz mode change
function handleQuizModeChange() {
    if (automaticModeRadio.checked) {
        quizMode = 'automatic';
    } else {
        quizMode = 'manual';
    }
}

// Function to start the quiz
function startQuiz() {
    const selectedTopic = topicSelect.value;
    filteredQuestions = filterQuestionsByTopic(selectedTopic); // Update filtered questions

    if (filteredQuestions.length === 0) {
        alert('No questions available for selected topic.');
        return;
    }

    // Display quiz container and hide intro container
    introContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    // Show the home button when quiz starts
    homeButton.style.display = 'inline-block';

    // Reset current question index and show the first question
    currentQuestionIndex = 0;
    showQuestion();
    updateQuestionIndicator();

    // Reset timer indicator
    timerIndicator.style.display = 'none'; // Ensure timer display starts hidden
    timerIndicator.style.animation = 'none'; // Reset any animation

    // Show navigation buttons when quiz starts
    toggleNavigationButtons(true);

    // Start timer if in automatic mode
    if (quizMode === 'automatic') {
        startTimer(); // Start the timer when quiz starts in automatic mode
    }
}

// Function to show the current question
function showQuestion() {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    correctAnswerElement.textContent = ''; // Clear previous correct answer if any

    // Start timer only if in automatic mode
    if (quizMode === 'automatic') {
        startTimer();
    }
}

// Function to start the timer
function startTimer() {
    const timeLimit = 15; // Time limit in seconds
    let timeLeft = timeLimit;
    const timerIndicator = document.getElementById('timer-indicator');
    let answerRevealed = false; // Flag to track if answer has been revealed

    timerIndicator.style.width = '100%'; // Start with full width
    timerIndicator.style.display = 'block'; // Ensure timer is displayed

    timerInterval = setInterval(() => {
        timeLeft--;
        const widthPercentage = (timeLeft / timeLimit) * 100;
        timerIndicator.style.width = widthPercentage + '%';

        // Check if timer is within the last 4 seconds and answer hasn't been revealed yet
        if (timeLeft > 0 && timeLeft <= 5 && !answerRevealed) {
            if (quizMode === 'automatic') {
                revealAnswer(); // Automatically reveal the answer
                answerRevealed = true; // Set flag to true to prevent multiple reveals
            }
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // Move to the next question automatically
            showNextQuestion();
        }
    }, 1000); // Update every second

    // Reset answerRevealed flag for each question
    answerRevealed = false;
}

// Function to handle time-up behavior (move to next question)
function handleTimeUp() {
    // Optionally, you can display a message or perform any other actions here
    showNextQuestion(); // Move to the next question automatically
}

// Function to update question indicator
function updateQuestionIndicator() {
    questionIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
}

// Function to show the next question
function showNextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateQuestionIndicator();
    } else {
        // Optionally, handle quiz completion or stop the quiz
        alert('Quiz complete!');
        returnToIntro();
    }
}

// Function to show the previous question
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateQuestionIndicator();
    }
}

// Function to reveal the correct answer
function revealAnswer() {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    correctAnswerElement.textContent = `Correct Answer: ${currentQuestion.correct}`;
}

let answerVisible = false;

// Function to reveal or hide the correct answer
function revealAnswer() {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const correctAnswer = `Correct Answer: ${currentQuestion.correct}`;
    
    // Toggle visibility based on answerVisible flag
    if (answerVisible) {
        correctAnswerElement.textContent = '';
    } else {
        correctAnswerElement.textContent = correctAnswer;
    }
    
    // Toggle answerVisible flag
    answerVisible = !answerVisible;
}

// Function to return to the intro page
function returnToIntro() {
    quizContainer.style.display = 'none';
    introContainer.style.display = 'block';

    // Hide the home button when returning to intro
    homeButton.style.display = 'none';

    // Clear timer indicator display
    timerIndicator.style.display = 'none';

    // Hide navigation buttons when returning to intro
    toggleNavigationButtons(false);
}

// Function to toggle visibility of navigation buttons
function toggleNavigationButtons(show) {
    if (show) {
        navigationButtons.style.display = 'flex'; // Show navigation buttons
    } else {
        navigationButtons.style.display = 'none'; // Hide navigation buttons
    }
}

// Event listeners
startQuizButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    if (quizMode === 'manual') {
        showNextQuestion();
    }
});
previousButton.addEventListener('click', () => {
    if (quizMode === 'manual') {
        showPreviousQuestion();
    }
});
revealButton.addEventListener('click', revealAnswer);
homeButton.addEventListener('click', returnToIntro);



// Settings modal event listeners
settingsCloseBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});
saveSettingsBtn.addEventListener('click', () => {
    handleQuizModeChange();
    settingsModal.style.display = 'none';
});

// Settings button click event listener
settingsBtn.addEventListener('click', () => {
    if (settingsModal.style.display === 'block') {
        settingsModal.style.display = 'none';
    } else {
        settingsModal.style.display = 'block';
    }
});

// Initialize quiz interface
document.addEventListener('DOMContentLoaded', () => {
    quizContainer.style.display = 'none'; // Hide quiz container initially

    // Open settings modal when clicking settings button
    document.getElementById('settings-btn').addEventListener('click', () => {
        settingsModal.style.display = 'block';
    });

    // Hide navigation buttons initially
    toggleNavigationButtons(false);
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutModal = document.getElementById('about-modal');
    const aboutBtn = document.getElementById('about-btn');
    const closeBtn = aboutModal.querySelector('.close');

    // Show modal when About button is clicked
    aboutBtn.addEventListener('click', function() {
        aboutModal.style.display = 'flex'; // Use flex to center content
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        aboutModal.style.display = 'none';
    });

    // Close modal when clicking outside modal content
    window.addEventListener('click', function(event) {
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
    });
});


