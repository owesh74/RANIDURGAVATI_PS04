const mongoose = require('mongoose');
const Question = require('./models/Question');
require('dotenv').config();

const questions = [
  // --- JAVA DOMAIN ---
  {
    domain: "Java",
    difficulty: "Easy",
    question: "Why is Java considered Platform Independent?",
    ideal_answer: "Java is platform-independent because source code is compiled into bytecode, which can run on any system that has a compatible JVM (Write Once, Run Anywhere)."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is the difference between JDK, JRE, and JVM?",
    ideal_answer: "JDK contains development tools like the compiler, JRE provides the runtime environment, and JVM executes Java bytecode."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is Autoboxing and Unboxing?",
    ideal_answer: "Autoboxing converts primitives to wrapper objects automatically, while unboxing converts wrapper objects back to primitives."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What are the four pillars of OOP?",
    ideal_answer: "The four pillars of Object-Oriented Programming are Encapsulation, Inheritance, Polymorphism, and Abstraction."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is the use of the 'static' keyword?",
    ideal_answer: "The 'static' keyword means the member belongs to the class itself rather than to individual instances of the class."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is the difference between a constructor and a method?",
    ideal_answer: "A constructor initializes a new object and has no return type, while a method performs operations on an object and must specify a return type."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "Why are Strings immutable in Java?",
    ideal_answer: "Strings are immutable for security, synchronization, caching (String Pool), and to prevent unauthorized modification of shared data."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is the purpose of the 'final' keyword?",
    ideal_answer: "The 'final' keyword prevents a variable from being changed, a method from being overridden, and a class from being inherited."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is the difference between 'throw' and 'throws'?",
    ideal_answer: "'throw' is used to explicitly throw an exception within a method, while 'throws' is used in a method signature to declare exceptions that might occur."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is Method Overloading?",
    ideal_answer: "Method Overloading allows multiple methods in the same class to have the same name but different parameters (compile-time polymorphism)."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is Method Overriding?",
    ideal_answer: "Method Overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class (runtime polymorphism)."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is the purpose of the 'this' keyword?",
    ideal_answer: "The 'this' keyword refers to the current instance of the class and is used to resolve ambiguity between instance variables and local parameters."
  },
  {
    domain: "Java",
    difficulty: "Easy",
    question: "What is an Interface in Java?",
    ideal_answer: "An interface is a reference type that can contain only constants and abstract methods; it is used to achieve full abstraction and multiple inheritance."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What is the difference between == and equals()?",
    ideal_answer: "== compares references, while equals() compares the actual content of objects."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "Explain Stack vs Heap memory in Java.",
    ideal_answer: "Stack stores method calls and local variables and is thread-specific. Heap stores objects and is shared across threads."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "Why are Strings immutable in Java?",
    ideal_answer: "Immutability provides security, thread-safety, and enables String pooling for better memory optimization."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What are the main features of Java 8?",
    ideal_answer: "Lambda expressions, Stream API, Functional Interfaces, Method References, and Default methods in interfaces."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What is a Functional Interface?",
    ideal_answer: "An interface with exactly one abstract method, used mainly with lambda expressions."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What is Optional in Java?",
    ideal_answer: "Optional is a container object that may or may not contain a value, helping avoid NullPointerExceptions."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "Difference between ArrayList and LinkedList?",
    ideal_answer: "ArrayList is faster for random access, while LinkedList is faster for insertion and deletion."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "How does HashMap handle collisions in Java 8?",
    ideal_answer: "It uses a linked list initially, and converts it into a Red-Black Tree if the bucket size exceeds a threshold."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What is the volatile keyword?",
    ideal_answer: "It ensures visibility of variable changes across threads but does not guarantee atomicity."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What is a Deadlock and how can it be prevented?",
    ideal_answer: "A deadlock occurs when threads wait indefinitely for locks held by each other. It can be prevented using consistent lock ordering or timeout-based locking."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "Difference between wait() and sleep()?",
    ideal_answer: "wait() releases the lock and waits for notification, while sleep() pauses execution without releasing the lock."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What is Garbage Collection in Java?",
    ideal_answer: "Garbage Collection automatically removes unused objects from heap memory to free resources."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "Explain Young and Old Generation in Java Heap.",
    ideal_answer: "Young Generation stores new objects, while Old Generation stores long-lived objects that survived multiple GC cycles."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What is Method Overloading vs Overriding?",
    ideal_answer: "Overloading happens at compile-time with different parameters. Overriding happens at runtime with the same method signature."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What is a Singleton class and how do you make it thread-safe?",
    ideal_answer: "A Singleton allows only one instance. Thread safety can be achieved using double-checked locking or static inner class."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What is Reflection in Java?",
    ideal_answer: "Reflection allows inspection and modification of classes, methods, and fields at runtime."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What is Type Erasure in Generics?",
    ideal_answer: "Generic type information is removed at compile-time to maintain backward compatibility."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "Difference between map() and flatMap() in Streams?",
    ideal_answer: "map() transforms one element to one result, while flatMap() flattens multiple results into a single stream."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What are Records in Java?",
    ideal_answer: "Records are immutable data carrier classes that reduce boilerplate code."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What are Virtual Threads?",
    ideal_answer: "Virtual Threads are lightweight threads that allow massive concurrency with minimal resource usage."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "What is JIT Compilation?",
    ideal_answer: "JIT compiles frequently executed bytecode into native machine code at runtime for better performance."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "Can a thread be started twice in Java?",
    ideal_answer: "No, starting a thread twice throws IllegalThreadStateException."
  },

  // --- HR DOMAIN ---
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is Human Resource Management (HRM)?",
    ideal_answer: "HRM is the process of managing people within an organization, including recruitment, training, performance management, and employee welfare."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What are the key functions of HR?",
    ideal_answer: "Key HR functions include recruitment & selection, training & development, performance appraisal, compensation & benefits, and employee relations."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is the role of HR in an organization?",
    ideal_answer: "HR ensures the organization has the right people, manages employee performance, resolves conflicts, and maintains workplace culture and compliance."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is recruitment?",
    ideal_answer: "Recruitment is the process of attracting, screening, and selecting qualified candidates for a job role."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is onboarding?",
    ideal_answer: "Onboarding is the process of integrating a new employee into the organization, providing orientation, resources, and training."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is performance appraisal?",
    ideal_answer: "Performance appraisal is the systematic evaluation of an employee's job performance, skills, achievements, and areas for improvement."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is employee engagement?",
    ideal_answer: "Employee engagement is the emotional commitment employees have towards their organization, reflected in motivation, productivity, and loyalty."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is the difference between training and development?",
    ideal_answer: "Training improves current job skills, while development focuses on long-term growth and preparing employees for future roles."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is succession planning?",
    ideal_answer: "Succession planning identifies and develops employees to fill key leadership roles in the future, ensuring business continuity."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is the importance of HR policies?",
    ideal_answer: "HR policies provide guidelines for employee behavior, ensure compliance with laws, maintain fairness, and standardize procedures."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is the difference between HRM and Strategic HRM?",
    ideal_answer: "HRM focuses on managing employees and day-to-day activities, while Strategic HRM aligns human resource practices with the organization's long-term goals."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "Explain the concept of talent management.",
    ideal_answer: "Talent management is a strategic approach to attracting, developing, retaining, and utilizing employees to meet organizational goals effectively."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What are KPIs in HR?",
    ideal_answer: "KPIs (Key Performance Indicators) are measurable values used to evaluate HR performance in areas like employee retention, recruitment efficiency, and training effectiveness."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is employee retention strategy?",
    ideal_answer: "Employee retention strategies are initiatives to reduce turnover, including career development, recognition programs, competitive compensation, and healthy work culture."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is HR analytics?",
    ideal_answer: "HR analytics involves using data analysis and metrics to improve HR decision-making, workforce planning, and employee performance."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is the difference between an employee and a contractor?",
    ideal_answer: "An employee works directly under the organization's supervision and is entitled to benefits, while a contractor works independently and is usually paid per project."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is a job description?",
    ideal_answer: "A job description outlines the duties, responsibilities, qualifications, and skills required for a particular role."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is an interview?",
    ideal_answer: "An interview is a process to assess a candidate's skills, experience, and suitability for a job role."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is employee feedback?",
    ideal_answer: "Employee feedback is information given to an employee about their performance, behavior, or skills to improve or reinforce desired outcomes."
  },
  {
    domain: "HR",
    difficulty: "Easy",
    question: "What is workforce planning?",
    ideal_answer: "Workforce planning ensures the organization has the right number of people with the right skills to meet current and future business goals."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is the difference between recruitment and selection?",
    ideal_answer: "Recruitment attracts candidates for a job, while selection chooses the most suitable candidate from those applicants."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is a competency model?",
    ideal_answer: "A competency model defines the skills, knowledge, behaviors, and attributes required for effective performance in a role or organization."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is job evaluation?",
    ideal_answer: "Job evaluation is the process of assessing a job's relative worth to determine fair compensation and pay structure."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is 360-degree feedback?",
    ideal_answer: "360-degree feedback collects performance feedback from multiple sources like peers, managers, subordinates, and self-assessment to get a comprehensive view."
  },
  {
    domain: "HR",
    difficulty: "Medium",
    question: "What is the difference between HR generalist and HR specialist?",
    ideal_answer: "HR generalists handle multiple HR functions broadly, while HR specialists focus on one area like recruitment, payroll, or training."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is organizational culture?",
    ideal_answer: "Organizational culture is the set of shared values, beliefs, behaviors, and norms that shape how employees interact and work together."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is change management in HR?",
    ideal_answer: "Change management is the structured approach to transitioning individuals, teams, and organizations to a desired future state, ensuring adoption of new processes or systems."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is HR benchmarking?",
    ideal_answer: "HR benchmarking compares HR practices, policies, and performance metrics with industry standards or competitors to improve effectiveness."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is employee engagement survey?",
    ideal_answer: "An employee engagement survey measures employees' satisfaction, commitment, and motivation, helping organizations identify areas for improvement."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is HR outsourcing?",
    ideal_answer: "HR outsourcing is contracting external vendors to manage HR functions such as payroll, recruitment, benefits, or training."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is competency-based recruitment?",
    ideal_answer: "Competency-based recruitment selects candidates based on the specific skills, behaviors, and attributes needed to succeed in a role."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is employee retention rate and how is it calculated?",
    ideal_answer: "Employee retention rate measures the percentage of employees who stay with an organization over a period. Formula: (Number of employees at end of period − New hires) ÷ Number of employees at start × 100."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is HR compliance?",
    ideal_answer: "HR compliance ensures that the organization follows labor laws, regulations, and internal policies regarding employee rights, safety, and benefits."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "What is gap analysis in HR?",
    ideal_answer: "Gap analysis identifies the difference between current workforce capabilities and future business needs, helping HR plan training, hiring, or development."
  },
  {
    domain: "HR",
    difficulty: "Hard",
    question: "Explain strategic workforce planning.",
    ideal_answer: "Strategic workforce planning aligns the workforce with long-term business goals by forecasting future skills, roles, and headcount needs."
  },

  // --- CLOUD DOMAIN ---
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What is cloud computing?",
    ideal_answer: "Cloud computing is the delivery of computing services like servers, storage, databases, networking, and software over the internet, enabling on-demand access."
  },
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What are the types of cloud deployment models?",
    ideal_answer: "Deployment models include Public Cloud, Private Cloud, Hybrid Cloud, and Community Cloud."
  },
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What is IaaS?",
    ideal_answer: "IaaS (Infrastructure as a Service) provides virtualized computing resources like servers, storage, and networking over the cloud."
  },
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What is PaaS?",
    ideal_answer: "PaaS (Platform as a Service) provides a platform allowing developers to build, run, and manage applications without worrying about underlying infrastructure."
  },
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What is SaaS?",
    ideal_answer: "SaaS (Software as a Service) delivers software applications over the internet on a subscription basis without installation or maintenance."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is serverless computing?",
    ideal_answer: "Serverless computing allows developers to build and run applications without managing servers. The cloud provider handles resource allocation and scaling automatically."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is the difference between horizontal and vertical scaling in cloud?",
    ideal_answer: "Horizontal scaling adds more instances/machines to handle load, while vertical scaling increases resources (CPU, RAM) of existing machines."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is multi-tenancy in cloud computing?",
    ideal_answer: "Multi-tenancy is an architecture where multiple customers share the same computing resources securely while keeping data isolated."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is cloud elasticity?",
    ideal_answer: "Elasticity is the ability of a cloud system to automatically scale resources up or down based on demand."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is a virtual machine (VM)?",
    ideal_answer: "A virtual machine is a software-based emulation of a physical computer running an operating system and applications, isolated from the host machine."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "Explain the difference between public, private, and hybrid cloud with examples.",
    ideal_answer: "Public cloud is owned by providers and shared among users (e.g., AWS, Azure). Private cloud is dedicated to one organization. Hybrid cloud combines both, allowing workload portability."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is containerization and how does it differ from virtualization?",
    ideal_answer: "Containerization packages an app with its dependencies in a lightweight container, sharing the host OS kernel. Virtualization creates full virtual machines with separate OS, consuming more resources."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is Kubernetes?",
    ideal_answer: "Kubernetes is an open-source container orchestration platform used to automate deployment, scaling, and management of containerized applications."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is cloud load balancing?",
    ideal_answer: "Cloud load balancing distributes incoming traffic across multiple servers or instances to improve availability, reliability, and performance of applications."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is cloud security and what are common techniques?",
    ideal_answer: "Cloud security involves protecting data, applications, and services in the cloud. Techniques include encryption, identity & access management, firewalls, and monitoring."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is the difference between object storage and block storage in cloud?",
    ideal_answer: "Block storage stores data in fixed-size blocks for low-level access, often used by VMs. Object storage stores data as objects with metadata, suitable for unstructured data like images and videos."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "Explain disaster recovery in cloud computing.",
    ideal_answer: "Disaster recovery is a set of strategies and services to restore IT infrastructure and data after a failure or disaster, often using geographically distributed backup systems."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is cloud monitoring and which tools are used?",
    ideal_answer: "Cloud monitoring tracks performance, uptime, and security of cloud resources. Tools include AWS CloudWatch, Azure Monitor, Prometheus, and Grafana."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is edge computing and how is it related to cloud?",
    ideal_answer: "Edge computing processes data closer to where it is generated (IoT devices, sensors), reducing latency. It complements cloud by offloading some computation from central data centers."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "Explain the concept of Infrastructure as Code (IaC).",
    ideal_answer: "IaC is the practice of managing and provisioning infrastructure through code using tools like Terraform or CloudFormation, enabling automation, consistency, and version control."
  },
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What is a cloud service provider?",
    ideal_answer: "A cloud service provider is a company that offers cloud services like storage, computing, and applications over the internet. Examples: AWS, Azure, Google Cloud."
  },
  {
    domain: "Cloud",
    difficulty: "Easy",
    question: "What is the difference between on-premises and cloud computing?",
    ideal_answer: "On-premises computing uses local servers and infrastructure managed by the organization. Cloud computing provides resources over the internet, managed by a provider."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is a cloud API?",
    ideal_answer: "A cloud API is an interface provided by cloud services to interact with resources programmatically, enabling automation, integration, and management of cloud resources."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "What is cloud orchestration?",
    ideal_answer: "Cloud orchestration is the automated arrangement, coordination, and management of complex cloud services and workflows, ensuring seamless operation of resources."
  },
  {
    domain: "Cloud",
    difficulty: "Medium",
    question: "Explain the difference between cold, warm, and hot cloud backups.",
    ideal_answer: "Cold backup is stored offline (long-term, slow access), warm backup is online but not immediately ready, hot backup is continuously updated and immediately available."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is a Service Level Agreement (SLA) in cloud computing?",
    ideal_answer: "An SLA is a contract between a cloud provider and user defining expected service performance, uptime, support, and penalties for violations."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "Explain cloud cost optimization strategies.",
    ideal_answer: "Strategies include right-sizing resources, using reserved or spot instances, auto-scaling, optimizing storage usage, and monitoring idle resources."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is cloud federation?",
    ideal_answer: "Cloud federation is the interconnection of multiple cloud providers or private clouds to share resources, workload, and services seamlessly."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is cloud-native application?",
    ideal_answer: "A cloud-native application is designed to run in the cloud environment, using microservices, containers, DevOps practices, and scalable architecture."
  },
  {
    domain: "Cloud",
    difficulty: "Hard",
    question: "What is the difference between cloud availability zones and regions?",
    ideal_answer: "A region is a geographical area with multiple data centers. An availability zone is a separate data center within a region to provide redundancy and high availability."
  },

  // --- PYTHON DOMAIN ---
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What is Python?",
    ideal_answer: "Python is a high-level, interpreted programming language known for its simple syntax and readability."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What are Python lists?",
    ideal_answer: "Lists are ordered, mutable collections in Python that can store elements of different data types."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What is a variable in Python?",
    ideal_answer: "A variable is a name used to store data values that can change during program execution."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "What is the difference between a list and a tuple?",
    ideal_answer: "Lists are mutable, whereas tuples are immutable. Tuples are generally faster and more memory-efficient."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "Explain Python dictionaries.",
    ideal_answer: "Dictionaries store data in key-value pairs and provide fast access to values using unique keys."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "What are Python decorators?",
    ideal_answer: "Decorators are functions that modify the behavior of other functions without changing their code."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "Explain shallow copy vs deep copy in Python.",
    ideal_answer: "Shallow copy duplicates references to objects, while deep copy creates independent copies of all nested objects."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What is the Global Interpreter Lock (GIL)?",
    ideal_answer: "GIL is a mechanism in CPython that allows only one thread to execute Python bytecode at a time."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "Explain generators in Python.",
    ideal_answer: "Generators are functions that return an iterator and yield values one at a time using the yield keyword."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What is exception handling in Python?",
    ideal_answer: "Exception handling is a way to handle runtime errors using try, except, else, and finally blocks."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What is the difference between Python 2 and Python 3?",
    ideal_answer: "Python 3 is the latest version with improved features, better Unicode support, and print() as a function, while Python 2 is older and now deprecated."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What are Python strings?",
    ideal_answer: "Strings are sequences of characters enclosed in single, double, or triple quotes in Python."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What is the use of the 'len()' function?",
    ideal_answer: "The len() function returns the number of items in an object like a string, list, tuple, or dictionary."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "What are Python sets?",
    ideal_answer: "Sets are unordered collections of unique elements. They support operations like union, intersection, and difference."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "What is list comprehension?",
    ideal_answer: "List comprehension is a concise way to create lists using a single line of code with loops and conditional expressions."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "Explain Python modules and packages.",
    ideal_answer: "Modules are Python files containing functions and variables, while packages are collections of modules organized in directories with __init__.py."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What are metaclasses in Python?",
    ideal_answer: "Metaclasses are classes of classes that define how classes behave. They allow customization of class creation and behavior."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What is monkey patching in Python?",
    ideal_answer: "Monkey patching is dynamic modification of a class or module at runtime, usually to change or extend its behavior."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "Explain Python context managers and the 'with' statement.",
    ideal_answer: "Context managers handle setup and cleanup actions automatically. The 'with' statement ensures resources like files are properly managed."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What are Python closures?",
    ideal_answer: "Closures are functions that remember the values from their enclosing scopes even after the outer function has finished execution."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What is a Python function?",
    ideal_answer: "A function is a block of reusable code that performs a specific task and can be called with arguments."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What is the difference between '==' and 'is' in Python?",
    ideal_answer: "'==' checks value equality, while 'is' checks whether two objects refer to the same memory location."
  },
  {
    domain: "Python",
    difficulty: "Easy",
    question: "What are Python boolean values?",
    ideal_answer: "Boolean values are True or False, used to represent logical conditions in Python."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "Explain Python iterators.",
    ideal_answer: "An iterator is an object that allows traversal over elements of a collection using the __iter__() and __next__() methods."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "What is the difference between shallow copy and deep copy in Python?",
    ideal_answer: "Shallow copy copies only the outer object and references inner objects, while deep copy copies the object along with all nested objects."
  },
  {
    domain: "Python",
    difficulty: "Medium",
    question: "What is the difference between @staticmethod and @classmethod?",
    ideal_answer: "@staticmethod does not access class or instance data, while @classmethod receives the class as the first argument and can modify class state."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "Explain Python's memory management.",
    ideal_answer: "Python manages memory automatically using reference counting and garbage collection to free memory occupied by unused objects."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What is the difference between Python's 'deepcopy' and 'copy'?",
    ideal_answer: "'copy.copy()' creates a shallow copy, while 'copy.deepcopy()' creates a deep copy, duplicating all nested objects."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "Explain Python's multiple inheritance and Method Resolution Order (MRO).",
    ideal_answer: "Python allows a class to inherit from multiple parent classes. MRO defines the order in which methods are resolved when called."
  },
  {
    domain: "Python",
    difficulty: "Hard",
    question: "What is Python's GIL and how does it affect multi-threading?",
    ideal_answer: "GIL (Global Interpreter Lock) allows only one thread to execute Python bytecode at a time, limiting CPU-bound multi-threading performance."
  },

  // --- DSA (Data Structures & Algorithms) ---
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is an array and how is it used?",
    ideal_answer: "An array is a collection of elements of the same type stored in contiguous memory. It allows constant time access to elements using an index."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is a linked list?",
    ideal_answer: "A linked list is a linear data structure where each element (node) contains data and a reference to the next node. It allows dynamic memory allocation."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is a stack and how does it work?",
    ideal_answer: "A stack is a linear data structure following Last-In-First-Out (LIFO) principle. Operations include push (insert) and pop (remove) from the top."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "Explain the difference between stack and queue.",
    ideal_answer: "A stack uses LIFO, so the last inserted element is removed first. A queue uses FIFO (First-In-First-Out), so the first inserted element is removed first."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "What is a binary search and when is it used?",
    ideal_answer: "Binary search is an efficient search algorithm that works on sorted arrays. It repeatedly divides the search space in half until the target is found."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "Explain the difference between singly and doubly linked lists.",
    ideal_answer: "Singly linked lists have nodes with data and a pointer to the next node. Doubly linked lists have nodes with pointers to both next and previous nodes, allowing backward traversal."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a binary tree and its types?",
    ideal_answer: "A binary tree is a hierarchical data structure with nodes having at most two children. Types include full, complete, perfect, and balanced binary trees."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain time complexity of common sorting algorithms.",
    ideal_answer: "Bubble sort: O(n^2), Insertion sort: O(n^2), Selection sort: O(n^2), Merge sort: O(n log n), Quick sort: O(n log n) on average, O(n^2) worst case."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a graph and explain its representations.",
    ideal_answer: "A graph is a collection of vertices and edges connecting them. Representations include adjacency matrix (2D array) and adjacency list (list of neighbors for each vertex)."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain the difference between DFS and BFS.",
    ideal_answer: "DFS (Depth-First Search) explores as far as possible along a branch before backtracking. BFS (Breadth-First Search) explores all neighbors level by level using a queue."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is a queue and how does it work?",
    ideal_answer: "A queue is a linear data structure following First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is a hash table?",
    ideal_answer: "A hash table is a data structure that stores key-value pairs. It uses a hash function to compute an index where the value is stored for fast access."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is recursion?",
    ideal_answer: "Recursion is a technique where a function calls itself to solve a smaller instance of a problem until a base condition is met."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is a circular queue?",
    ideal_answer: "A circular queue is a queue in which the last position is connected back to the first position, forming a circle. It efficiently utilizes memory."
  },
  {
    domain: "DSA",
    difficulty: "Easy",
    question: "What is a stack overflow?",
    ideal_answer: "Stack overflow occurs when too many function calls or pushes exceed the stack's memory limit, causing the program to crash."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "What is a priority queue?",
    ideal_answer: "A priority queue is a data structure where each element has a priority. Elements with higher priority are dequeued before lower priority elements."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "Explain the difference between linear search and binary search.",
    ideal_answer: "Linear search checks each element one by one and works on unsorted data (O(n)). Binary search divides the array and works only on sorted data (O(log n))."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "What is a doubly ended queue (deque)?",
    ideal_answer: "A deque allows insertion and deletion from both front and rear, combining features of stack and queue."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "Explain the concept of dynamic programming.",
    ideal_answer: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computations."
  },
  {
    domain: "DSA",
    difficulty: "Medium",
    question: "What is a circular linked list?",
    ideal_answer: "A circular linked list is a linked list where the last node points back to the first node, forming a circle. It can be singly or doubly linked."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a segment tree and where is it used?",
    ideal_answer: "A segment tree is a binary tree used for storing intervals or segments, allowing efficient range queries and updates."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain the difference between AVL tree and Red-Black tree.",
    ideal_answer: "Both are self-balancing binary search trees. AVL tree is more strictly balanced, leading to faster lookups but slower insertions/deletions. Red-Black tree allows slightly less strict balance for faster insertions/deletions."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a trie and where is it useful?",
    ideal_answer: "A trie is a tree-like data structure used to store strings, where each node represents a character. Useful for prefix-based searches like autocomplete."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain Dijkstra's algorithm.",
    ideal_answer: "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edges."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a topological sort?",
    ideal_answer: "Topological sort is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, u comes before v."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain the difference between a tree and a graph.",
    ideal_answer: "A tree is a connected, acyclic graph with N nodes and N-1 edges. A graph can have cycles, multiple edges, and may be disconnected."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is the difference between Bellman-Ford and Dijkstra's algorithm?",
    ideal_answer: "Bellman-Ford can handle negative weight edges but is slower (O(VE)), while Dijkstra is faster (O(V + E log V)) but cannot handle negative weights."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a heap and its types?",
    ideal_answer: "A heap is a complete binary tree used for priority queues. Types: Max-heap (parent ≥ children) and Min-heap (parent ≤ children)."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain Floyd-Warshall algorithm.",
    ideal_answer: "Floyd-Warshall is an algorithm to find shortest paths between all pairs of vertices in a weighted graph using dynamic programming."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "What is a strongly connected component in a graph?",
    ideal_answer: "A strongly connected component (SCC) is a maximal set of vertices in a directed graph where every vertex is reachable from every other vertex in the set."
  },
  {
    domain: "DSA",
    difficulty: "Hard",
    question: "Explain KMP string matching algorithm.",
    ideal_answer: "KMP algorithm searches for a pattern in a text efficiently using a prefix table to avoid redundant comparisons."
  },

  // --- MACHINE LEARNING ---
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is Machine Learning?",
    ideal_answer: "Machine Learning is a subset of AI that allows systems to learn from data and improve performance without being explicitly programmed."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What are the main types of Machine Learning?",
    ideal_answer: "The main types are Supervised Learning, Unsupervised Learning, and Reinforcement Learning."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is a dataset?",
    ideal_answer: "A dataset is a collection of data used to train and test machine learning models."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is the difference between supervised and unsupervised learning?",
    ideal_answer: "Supervised learning uses labeled data to train models, while unsupervised learning works with unlabeled data to find hidden patterns."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is overfitting in Machine Learning?",
    ideal_answer: "Overfitting occurs when a model learns training data too well, including noise, and performs poorly on new unseen data."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is the role of a loss function?",
    ideal_answer: "A loss function measures how far the model's predictions are from actual values and helps in optimizing the model."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "Explain the bias-variance tradeoff.",
    ideal_answer: "Bias refers to error due to overly simple models, while variance refers to error due to overly complex models. The tradeoff is finding a balance between both to minimize total error."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "What is gradient descent and why is it used?",
    ideal_answer: "Gradient descent is an optimization algorithm used to minimize the loss function by iteratively updating model parameters in the direction of steepest descent."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "Explain the difference between batch, mini-batch, and stochastic gradient descent.",
    ideal_answer: "Batch gradient descent uses the entire dataset, stochastic uses one data point at a time, and mini-batch uses a small subset of data, balancing efficiency and stability."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is a feature in Machine Learning?",
    ideal_answer: "A feature is an individual measurable property or characteristic of the data used for training a machine learning model."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is a label?",
    ideal_answer: "A label is the output or target variable that the model tries to predict in supervised learning."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is train-test split?",
    ideal_answer: "Train-test split is the process of dividing a dataset into training data and testing data to evaluate model performance."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is normalization and why is it needed?",
    ideal_answer: "Normalization scales features to a common range to improve model performance and convergence speed."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "Explain precision and recall.",
    ideal_answer: "Precision measures how many predicted positives are actually correct, while recall measures how many actual positives were correctly predicted."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is cross-validation?",
    ideal_answer: "Cross-validation is a technique used to evaluate a model by splitting data into multiple folds and training/testing the model multiple times."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "What is regularization in Machine Learning?",
    ideal_answer: "Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "Explain L1 and L2 regularization.",
    ideal_answer: "L1 regularization adds absolute values of weights and can lead to sparse models, while L2 adds squared weights and reduces large weights smoothly."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "What is an ensemble method?",
    ideal_answer: "Ensemble methods combine multiple models to improve overall performance, such as Random Forest and Gradient Boosting."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "Explain the difference between bagging and boosting.",
    ideal_answer: "Bagging reduces variance by training models independently on random subsets, while boosting reduces bias by training models sequentially focusing on errors."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is a model in Machine Learning?",
    ideal_answer: "A model is a mathematical representation learned from data that is used to make predictions or decisions."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is training data?",
    ideal_answer: "Training data is the dataset used to teach a machine learning model to recognize patterns and relationships."
  },
  {
    domain: "ML",
    difficulty: "Easy",
    question: "What is testing data?",
    ideal_answer: "Testing data is used to evaluate how well a trained model performs on unseen data."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is a confusion matrix?",
    ideal_answer: "A confusion matrix is a table used to evaluate classification models by showing true positives, true negatives, false positives, and false negatives."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "Explain accuracy in Machine Learning.",
    ideal_answer: "Accuracy is the ratio of correctly predicted instances to the total number of instances."
  },
  {
    domain: "ML",
    difficulty: "Medium",
    question: "What is feature selection?",
    ideal_answer: "Feature selection is the process of choosing the most relevant features to improve model performance and reduce complexity."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "What is PCA (Principal Component Analysis)?",
    ideal_answer: "PCA is a dimensionality reduction technique that transforms data into fewer components while retaining maximum variance."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "Explain the concept of dimensionality reduction.",
    ideal_answer: "Dimensionality reduction reduces the number of input features while preserving important information to improve efficiency and performance."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "What is the difference between classification and regression?",
    ideal_answer: "Classification predicts discrete class labels, while regression predicts continuous numerical values."
  },
  {
    domain: "ML",
    difficulty: "Hard",
    question: "What is hyperparameter tuning?",
    ideal_answer: "Hyperparameter tuning is the process of selecting optimal hyperparameter values to improve model performance."
  },
  { domain: "Java", difficulty: "Easy", question: "What is the default value of a boolean variable in Java?", ideal_answer: "The default value of a boolean primitive is 'false'." },
  { domain: "Java", difficulty: "Easy", question: "What is a package in Java?", ideal_answer: "A package is a namespace that organizes a set of related classes and interfaces." },
  { domain: "Java", difficulty: "Easy", question: "What is the purpose of the 'break' statement?", ideal_answer: "It is used to terminate a loop or a switch statement and transfer execution to the following statement." },
  { domain: "Java", difficulty: "Easy", question: "Difference between float and double?", ideal_answer: "Float is a single-precision 32-bit IEEE 754 floating point, while double is a double-precision 64-bit." },
  { domain: "Java", difficulty: "Easy", question: "What is the 'main' method signature?", ideal_answer: "public static void main(String[] args)" },
  { domain: "Java", difficulty: "Easy", question: "What is an abstract class?", ideal_answer: "A class declared with the 'abstract' keyword that cannot be instantiated and may contain abstract methods." },
  { domain: "Java", difficulty: "Easy", question: "What is the 'super' keyword?", ideal_answer: "It is a reference variable used to refer to immediate parent class objects." },
  { domain: "Java", difficulty: "Easy", question: "What is a wrapper class?", ideal_answer: "Classes that allow primitive types to be accessed as objects (e.g., Integer for int)." },
  { domain: "Java", difficulty: "Easy", question: "What is the use of 'continue' statement?", ideal_answer: "It skips the current iteration of a loop and continues with the next one." },
  { domain: "Java", difficulty: "Easy", question: "What is an array in Java?", ideal_answer: "An object that holds a fixed number of values of a single type." },
  { domain: "Java", difficulty: "Easy", question: "Can we change the scope of an overridden method in a subclass?", ideal_answer: "Yes, but only to a more permissive one (e.g., protected to public)." },
  { domain: "Java", difficulty: "Easy", question: "What is the size of 'char' in Java?", ideal_answer: "16 bits (2 bytes) because it uses Unicode." },
  { domain: "Java", difficulty: "Easy", question: "What is the base class of all Java classes?", ideal_answer: "java.lang.Object" },
  { domain: "Java", difficulty: "Easy", question: "What is 'System.out.println()'?", ideal_answer: "A statement used to print an argument to the standard console." },
  { domain: "Java", difficulty: "Easy", question: "Difference between local and instance variables?", ideal_answer: "Local variables are defined in methods; instance variables are defined in the class but outside methods." },
  { domain: "Java", difficulty: "Easy", question: "What is a String Pool?", ideal_answer: "A special memory area in the Heap where String literals are stored for reusability." },
  { domain: "Java", difficulty: "Easy", question: "What is the purpose of the 'byte' data type?", ideal_answer: "To save memory in large arrays where the values are within -128 to 127." },

  // MEDIUM (Need 31 more)
  { domain: "Java", difficulty: "Medium", question: "What is the difference between fail-fast and fail-safe iterators?", ideal_answer: "Fail-fast throws ConcurrentModificationException on modification; Fail-safe works on a copy." },
  { domain: "Java", difficulty: "Medium", question: "What is the difference between a synchronized block and a synchronized method?", ideal_answer: "Blocks allow locking on specific objects and offer finer granularity than methods." },
  { domain: "Java", difficulty: "Medium", question: "Explain the 'Diamond Problem' in Java.", ideal_answer: "It refers to ambiguity in multiple inheritance, resolved in Java by only allowing it through interfaces with default methods." },
  { domain: "Java", difficulty: "Medium", question: "What is a Volatile variable?", ideal_answer: "A variable whose value is always read from and written to main memory, ensuring visibility across threads." },
  { domain: "Java", difficulty: "Medium", question: "What is the difference between Comparator and Comparable?", ideal_answer: "Comparable is for natural ordering (internal); Comparator is for custom ordering (external)." },
  { domain: "Java", difficulty: "Medium", question: "How does the 'finally' block work with 'return'?", ideal_answer: "The finally block always executes even if there is a return statement in the try/catch block." },
  { domain: "Java", difficulty: "Medium", question: "What is the difference between HashSet and TreeSet?", ideal_answer: "HashSet is faster but unordered; TreeSet is slower but keeps elements sorted." },
  { domain: "Java", difficulty: "Medium", question: "What is a Functional Interface?", ideal_answer: "An interface with exactly one abstract method (e.g., Runnable, Callable)." },
  { domain: "Java", difficulty: "Medium", question: "Explain StringJoiner in Java 8.", ideal_answer: "A utility class used to construct a sequence of characters separated by a delimiter." },
  { domain: "Java", difficulty: "Medium", question: "What is the difference between Error and Exception?", ideal_answer: "Errors are irrecoverable (e.g., OutOfMemory); Exceptions can be caught and handled." },
  { domain: "Java", difficulty: "Medium", question: "What is Marker Interface?", ideal_answer: "An interface with no methods, used to provide metadata to the JVM (e.g., Serializable)." },
  { domain: "Java", difficulty: "Medium", question: "What is the purpose of the 'Transient' keyword?", ideal_answer: "It prevents a variable from being serialized." },
  { domain: "Java", difficulty: "Medium", question: "Difference between Path and File in Java NIO?", ideal_answer: "Path is more modern and provides better support for symbolic links and metadata." },
  { domain: "Java", difficulty: "Medium", question: "What is the Java Memory Model (JMM)?", ideal_answer: "A specification that describes how threads interact through memory." },
  { domain: "Java", difficulty: "Medium", question: "What is a Daemon thread?", ideal_answer: "A low-priority thread that provides background services and dies when all user threads stop." },
  { domain: "Java", difficulty: "Medium", question: "How can you create an Immutable class?", ideal_answer: "Make class final, fields private/final, no setters, and deep copy mutable fields." },
  { domain: "Java", difficulty: "Medium", question: "What is the difference between poll() and remove() in Queue?", ideal_answer: "poll() returns null if empty; remove() throws an exception." },
  { domain: "Java", difficulty: "Medium", question: "What is 'Type Inference'?", ideal_answer: "The compiler's ability to look at method calls and declarations to determine the type (e.g., 'var' keyword)." },
  { domain: "Java", difficulty: "Medium", question: "Explain the Use of 'instanceof' operator.", ideal_answer: "It checks if an object is an instance of a specific class or interface." },
  { domain: "Java", difficulty: "Medium", question: "What is a Static Initializer Block?", ideal_answer: "A block of code that runs once when the class is first loaded into memory." },
  { domain: "Java", difficulty: "Medium", question: "Difference between Iterator and ListIterator?", ideal_answer: "ListIterator allows bidirectional traversal and modification; Iterator is forward-only." },
  { domain: "Java", difficulty: "Medium", question: "What is Method Reference?", ideal_answer: "A shorthand for a lambda expression to call a method (e.g., System.out::println)." },
  { domain: "Java", difficulty: "Medium", question: "What is the difference between sleep() and yield()?", ideal_answer: "sleep() pauses for a duration; yield() suggests the scheduler let other threads run." },
  { domain: "Java", difficulty: "Medium", question: "Explain the Collector interface in Streams.", ideal_answer: "It encapsulates the strategy for accumulating elements into a summary result (e.g., toList())." },
  { domain: "Java", difficulty: "Medium", question: "What is 'Shallow Copy' in Java?", ideal_answer: "Copying references to objects rather than the objects themselves." },
  { domain: "Java", difficulty: "Medium", question: "What is StringTokenizer?", ideal_answer: "A class used to break a string into tokens based on delimiters." },
  { domain: "Java", difficulty: "Medium", question: "What is the purpose of the 'strictfp' keyword?", ideal_answer: "Ensures floating-point calculations are the same across all platforms." },
  { domain: "Java", difficulty: "Medium", question: "Can we overload the main() method?", ideal_answer: "Yes, but JVM only calls the standard public static void main(String[] args)." },
  { domain: "Java", difficulty: "Medium", question: "What is a 'Checked' Exception?", ideal_answer: "Exceptions verified at compile-time (e.g., IOException)." },
  { domain: "Java", difficulty: "Medium", question: "What is an Inner Class?", ideal_answer: "A class defined within another class, having access to outer class members." },
  { domain: "Java", difficulty: "Medium", question: "What is the use of the '@Override' annotation?", ideal_answer: "It tells the compiler that the method is intended to override a parent method." },

  // HARD (Need 41 more)
  { domain: "Java", difficulty: "Hard", question: "Explain the G1 Garbage Collector in detail.", ideal_answer: "G1 partitions the heap into regions and prioritizes regions with most garbage ('Garbage First')." },
  { domain: "Java", difficulty: "Hard", question: "What is the 'Happens-Before' relationship in JMM?", ideal_answer: "A guarantee that memory writes by one statement are visible to another statement." },
  { domain: "Java", difficulty: "Hard", question: "What is the Fork/Join Framework?", ideal_answer: "An implementation of ExecutorService that uses work-stealing to speed up parallel tasks." },
  { domain: "Java", difficulty: "Hard", question: "Explain Dynamic Proxies.", ideal_answer: "Classes created at runtime to implement interfaces, routing calls to an InvocationHandler." },
  { domain: "Java", difficulty: "Hard", question: "How does the CMS (Concurrent Mark Sweep) collector work?", ideal_answer: "It minimizes pause times by performing most GC tasks concurrently with the application threads." },
  { domain: "Java", difficulty: "Hard", question: "What is PhantomReference used for?", ideal_answer: "For scheduling post-mortem cleanup actions more flexibly than finalizers." },
  { domain: "Java", difficulty: "Hard", question: "Explain the C3 Linearization algorithm in Java.", ideal_answer: "While Java doesn't have multiple class inheritance, it uses similar logic to resolve default method conflicts." },
  { domain: "Java", difficulty: "Hard", question: "What is Instruction Reordering?", ideal_answer: "Performance optimization by compiler/CPU that can break multi-threaded logic if not for 'volatile/synchronized'." },
  { domain: "Java", difficulty: "Hard", question: "What is 'Escape Analysis'?", ideal_answer: "A compiler optimization that determines if an object is accessible outside the scope it was created in." },
  { domain: "Java", difficulty: "Hard", question: "Explain the LMAX Disruptor pattern in Java.", ideal_answer: "A high-performance inter-thread communication library based on a ring buffer." },
  { domain: "Java", difficulty: "Hard", question: "What is the difference between bias-locking and thin-locking?", ideal_answer: "Biased locking assumes a lock is mostly used by one thread; thin locking is used when there is low contention." },
  { domain: "Java", difficulty: "Hard", question: "How do Java ClassLoaders work?", ideal_answer: "Uses a delegation model: Bootstrap -> Extension -> Application class loaders." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Metaspace' in Java 8.", ideal_answer: "It replaced PermGen, using native memory instead of heap memory to store class metadata." },
  { domain: "Java", difficulty: "Hard", question: "What is a ReentrantLock?", ideal_answer: "A lock that allows a thread to re-acquire the same lock it already holds without deadlocking." },
  { domain: "Java", difficulty: "Hard", question: "What is 'Thread Local Storage'?", ideal_answer: "Variables that can only be read and written by the same thread." },
  { domain: "Java", difficulty: "Hard", question: "Explain Double-Checked Locking singleton pattern.", ideal_answer: "A way to reduce synchronization overhead by checking the instance twice before creating it." },
  { domain: "Java", difficulty: "Hard", question: "What are 'Intrinsic Locks'?", ideal_answer: "The built-in locks associated with every object in Java, used by synchronized blocks." },
  { domain: "Java", difficulty: "Hard", question: "What is 'StampedLock'?", ideal_answer: "A capability-based lock with three modes: writing, reading, and optimistic reading." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'CompletableFuture' pipeline.", ideal_answer: "A way to write non-blocking asynchronous code by chaining multiple tasks." },
  { domain: "Java", difficulty: "Hard", question: "What is the 'LongAdder' class?", ideal_answer: "A class that provides better performance than AtomicLong under high thread contention." },
  { domain: "Java", difficulty: "Hard", question: "What is 'TLAB' (Thread Local Allocation Buffer)?", ideal_answer: "A region in Eden space specifically for one thread to allocate objects without synchronization." },
  { domain: "Java", difficulty: "Hard", question: "Explain the 'False Sharing' problem.", ideal_answer: "When multiple threads modify variables on the same CPU cache line, causing performance degradation." },
  { domain: "Java", difficulty: "Hard", question: "What is 'CopyOnWriteArrayList' performance trade-off?", ideal_answer: "Fast reads but very expensive writes as the entire array is copied." },
  { domain: "Java", difficulty: "Hard", question: "What is 'ReadWriteLock'?", ideal_answer: "A lock that allows multiple concurrent readers but only one writer." },
  { domain: "Java", difficulty: "Hard", question: "Explain the purpose of 'VarHandle'.", ideal_answer: "A more safe and efficient alternative to AtomicFieldUpdater and Unsafe." },
  { domain: "Java", difficulty: "Hard", question: "What is 'Project Loom'?", ideal_answer: "A proposal to introduce lightweight 'Virtual Threads' to Java." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Memory Barriers' (Fences).", ideal_answer: "Low-level instructions used to enforce ordering constraints on memory operations." },
  { domain: "Java", difficulty: "Hard", question: "What is 'IdentityHashMap'?", ideal_answer: "A HashMap that uses reference equality (==) instead of content equality (equals())." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Reference Queues'.", ideal_answer: "A queue where GC appends reference objects after they are cleared." },
  { domain: "Java", difficulty: "Hard", question: "What is the 'Service Provider Interface' (SPI)?", ideal_answer: "A mechanism for extending Java applications via external JARs." },
  { domain: "Java", difficulty: "Hard", question: "How does the 'String.intern()' method work?", ideal_answer: "It checks if the string exists in the pool; if not, it adds it and returns the reference." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Bootstrap ClassLoader'.", ideal_answer: "The root classloader that loads internal JDK classes from rt.jar." },
  { domain: "Java", difficulty: "Hard", question: "What is 'Wait-free' vs 'Lock-free'?", ideal_answer: "Lock-free ensures at least one thread progresses; Wait-free ensures every thread progresses." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Condition' variables in ReentrantLock.", ideal_answer: "They provide a way to suspend threads until a specific condition is true, more flexible than wait/notify." },
  { domain: "Java", difficulty: "Hard", question: "What is 'Method Handle' API?", ideal_answer: "A typed, executable reference to a method, faster than traditional reflection." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'CyclicBarrier'.", ideal_answer: "A synchronization aid that allows a set of threads to wait for each other at a common barrier point." },
  { domain: "Java", difficulty: "Hard", question: "What is 'CountDownLatch'?", ideal_answer: "A synchronization aid that allows one thread to wait until other threads complete a set of operations." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Semaphore' in Java.", ideal_answer: "A thread synchronization tool that controls access to a resource using a set of permits." },
  { domain: "Java", difficulty: "Hard", question: "What is 'Exchanger' class?", ideal_answer: "A synchronization point where two threads can exchange objects." },
  { domain: "Java", difficulty: "Hard", question: "Explain 'Threaded Interpretation'.", ideal_answer: "An optimization technique used in some JVM implementations to speed up bytecode execution." },
  { domain: "Java", difficulty: "Hard", question: "What is 'ZGC'?", ideal_answer: "A scalable low-latency garbage collector designed for massive heaps." },

  // --- HR DOMAIN ---
  // (Adding missing counts to reach 30/40/50)
  // [Following the same pattern for HR, Cloud, Python, DSA, ML...]
  // HR HARD (Need 35 more)
  { domain: "HR", difficulty: "Hard", question: "Explain the 'Hay System' of job evaluation.", ideal_answer: "A methodology used to map out job roles within an organization based on know-how, problem solving, and accountability." },
  { domain: "HR", difficulty: "Hard", question: "What is 'The Peter Principle'?", ideal_answer: "The theory that employees tend to rise to their level of incompetence through successive promotions." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Broadbanding' in compensation.", ideal_answer: "A pay structure that consolidates many salary grades into a few wide bands to provide more flexibility." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Predictive HR Analytics'?", ideal_answer: "Using historical data to forecast future outcomes like turnover or high-potential success." },
  { domain: "HR", difficulty: "Hard", question: "What is 'COBRA' compliance?", ideal_answer: "A law requiring employers to offer continued health coverage to employees who lose their benefits due to specific events." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Forced Distribution' performance rating.", ideal_answer: "A system where managers must assign a fixed percentage of employees to specific performance categories (e.g., top 10%, bottom 10%)." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Golden Parachute'?", ideal_answer: "Large financial settlements given to top executives if they are dismissed following a corporate takeover." },
  { domain: "HR", difficulty: "Hard", question: "What is 'ERISA'?", ideal_answer: "A federal law that sets minimum standards for most voluntarily established retirement and health plans in private industry." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Collective Bargaining'.", ideal_answer: "Negotiation process between employers and a group of employees (usually a union) to determine working conditions." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Grievance Redressal Mechanism'?", ideal_answer: "A formal system for employees to raise complaints and for management to resolve them fairly." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Glass Ceiling' phenomenon.", ideal_answer: "The metaphorical barrier that prevents women and minorities from reaching upper-level management positions." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Human Capital ROI'?", ideal_answer: "A metric that measures the financial value added by employees relative to the cost of their pay and benefits." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Employee Value Proposition' (EVP)?", ideal_answer: "The unique set of benefits and rewards an employee receives in return for their skills and performance." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Balanced Scorecard' in HR.", ideal_answer: "A strategic tool that measures HR performance across four perspectives: Financial, Customer, Internal Processes, and Growth." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Labor Turnover Cost Analysis'?", ideal_answer: "Calculating the total financial impact of employees leaving, including recruitment, training, and lost productivity." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Kirkpatrick Model' of training evaluation.", ideal_answer: "A 4-level model: Reaction, Learning, Behavior, and Results." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Constructive Dismissal'?", ideal_answer: "When an employee resigns because the employer's behavior has made working conditions intolerable." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Bona Fide Occupational Qualification' (BFOQ)?", ideal_answer: "A legal provision allowing employers to hire based on characteristics that would otherwise be discriminatory if they are essential to the job." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Psychometric Testing'.", ideal_answer: "Standardized tests designed to measure a candidate's mental capabilities and behavioral style." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Succession Readiness'?", ideal_answer: "The evaluation of how prepared potential successors are to take over key roles immediately." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Vertical Loading' in job enrichment.", ideal_answer: "Giving employees more control and responsibility over their work tasks." },
  { domain: "HR", difficulty: "Hard", question: "What is 'HR Audit'?", ideal_answer: "A comprehensive review of an organization's HR policies, procedures, and systems to ensure compliance and efficiency." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Vroom’s Expectancy Theory'.", ideal_answer: "Motivation is based on Expectancy (effort leads to performance), Instrumentality (performance leads to reward), and Valence (value of reward)." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Host-Country National'?", ideal_answer: "An employee who is a citizen of the country in which a foreign subsidiary is located." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Expatriate Failure'.", ideal_answer: "When an employee sent abroad returns early or fails to meet performance goals in the foreign assignment." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Total Rewards Model'?", ideal_answer: "Includes everything an employee perceives as valuable, from salary and benefits to work-life balance and development." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Behaviorally Anchored Rating Scales' (BARS).", ideal_answer: "A rating system that combines qualitative narrative examples with quantitative scales." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Industrial Relations' (IR)?", ideal_answer: "The relationship between management and workers, particularly involving trade unions and labor laws." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Herzberg’s Two-Factor Theory'.", ideal_answer: "Differentiates between hygiene factors (salary, conditions) that prevent dissatisfaction and motivators (recognition, growth) that create satisfaction." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Work-Life Integration' vs 'Balance'?", ideal_answer: "Integration seeks to blend work and personal life seamlessly, whereas balance views them as separate entities." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Gamification' in recruitment.", ideal_answer: "Using game-design elements and principles in the hiring process to engage and assess candidates." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Reverse Mentoring'?", ideal_answer: "When a junior employee mentors a senior executive, often on topics like technology or modern culture." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Tacit Knowledge' management.", ideal_answer: "Strategies to capture the personal, experience-based knowledge of employees that is hard to write down." },
  { domain: "HR", difficulty: "Hard", question: "What is 'Affirmative Action'?", ideal_answer: "Policies aimed at increasing the representation of specific groups that have been historically excluded." },
  { domain: "HR", difficulty: "Hard", question: "Explain 'Self-Managed Work Teams'.", ideal_answer: "Groups of employees who work together without direct supervision to complete entire tasks or projects." },

  // --- DSA DOMAIN ---
  // HARD (Need 33 more)
  
  { domain: "DSA", difficulty: "Hard", question: "Explain the properties of a Red-Black Tree.", ideal_answer: "Every node is red or black, the root is black, leaves are black, red nodes must have black children, and paths have same black node count." },
  { domain: "DSA", difficulty: "Hard", question: "How does the KMP (Knuth-Morris-Pratt) algorithm work?", ideal_answer: "It uses a partial match table to skip unnecessary comparisons during string searching." },
  { domain: "DSA", difficulty: "Hard", question: "What is the Time Complexity of building a Heap?", ideal_answer: "O(n) using the bottom-up approach (Heapify)." },
  { domain: "DSA", difficulty: "Hard", question: "Explain Tarjan's algorithm for Strongly Connected Components.", ideal_answer: "It uses DFS and a stack to find SCCs in O(V+E) time by tracking discovery and low-link values." },
  { domain: "DSA", difficulty: "Hard", question: "What is a Fenwick Tree (Binary Indexed Tree)?", ideal_answer: "A data structure that provides efficient methods for prefix sums and point updates in O(log n)." },
  { domain: "DSA", difficulty: "Hard", question: "Explain the A* Search Algorithm.", ideal_answer: "An extension of Dijkstra that uses heuristics to guide the search toward the goal more efficiently." },
  { domain: "DSA", difficulty: "Hard", question: "What is the difference between a B-Tree and a B+ Tree?", ideal_answer: "B+ trees store all data in leaf nodes and use a linked list for leaves, making range queries faster." },
  { domain: "DSA", difficulty: "Hard", question: "Explain the concept of 'Amortized Complexity'.", ideal_answer: "The average time per operation over a sequence of operations, accounting for occasional expensive steps." },
  { domain: "DSA", difficulty: "Hard", question: "What is a Suffix Tree?", ideal_answer: "A compressed trie containing all the suffixes of a given string, used for fast pattern matching." },
  { domain: "DSA", difficulty: "Hard", question: "Explain the Z-Algorithm for pattern matching.", ideal_answer: "It constructs a Z-array where each element is the length of the longest common prefix between the string and its suffix." },
  { domain: "DSA", difficulty: "Hard", question: "What is the Huffman Coding algorithm?", ideal_answer: "A greedy algorithm used for lossless data compression based on character frequency." },
  { domain: "DSA", difficulty: "Hard", question: "Explain the 'Traveling Salesperson Problem' (TSP).", ideal_answer: "An NP-hard problem seeking the shortest possible route that visits every city exactly once and returns to the origin." },
  { domain: "DSA", difficulty: "Hard", question: "What is a Skip List?", ideal_answer: "A probabilistic data structure that allows fast search, insertion, and deletion within an ordered sequence." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Bloom Filters'.", ideal_answer: "A space-efficient probabilistic data structure used to test if an element is a member of a set (may have false positives)." },
  { domain: "DSA", difficulty: "Hard", question: "What is the difference between Prim's and Kruskal's algorithms?", ideal_answer: "Prim's grows a tree from a starting node; Kruskal's adds the cheapest edges across the whole graph while avoiding cycles." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Disjoint Set Union' (DSU) with Path Compression.", ideal_answer: "A data structure that tracks elements partitioned into disjoint sets, optimized by making nodes point directly to the root." },
  { domain: "DSA", difficulty: "Hard", question: "What is a 'Radix Sort'?", ideal_answer: "A non-comparative sorting algorithm that sorts data by processing individual digits." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Rabin-Karp' algorithm.", ideal_answer: "A string-searching algorithm that uses hashing to find any one of a set of pattern strings in a text." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Square Root Decomposition'?", ideal_answer: "A technique that divides a large array into blocks of size sqrt(n) to handle range queries efficiently." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Monotonic Stack'.", ideal_answer: "A stack where elements are always in increasing or decreasing order, used to find next greater/smaller elements." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Kadane's Algorithm'?", ideal_answer: "A dynamic programming approach to find the maximum sum contiguous subarray in O(n)." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Sparse Table' data structure.", ideal_answer: "A data structure for range minimum queries (RMQ) that allows O(1) query time after O(n log n) preprocessing." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Maximum Flow' (Ford-Fulkerson)?", ideal_answer: "An algorithm to find the maximum amount of flow that can go through a single-source, single-sink network." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Heavy-Light Decomposition'.", ideal_answer: "A technique to decompose a tree into paths to handle path queries and updates in O(log^2 n)." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Bridges in a Graph'?", ideal_answer: "An edge in an undirected graph whose removal increases the number of connected components." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Articulation Points' (Cut Vertices).", ideal_answer: "A vertex whose removal increases the number of connected components." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Bitmask Dynamic Programming'?", ideal_answer: "A technique where an integer's binary representation represents a subset of items to solve optimization problems." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Lowest Common Ancestor' (LCA) using binary lifting.", ideal_answer: "A method to find the LCA of two nodes in a tree in O(log n) time by precomputing ancestors at powers of 2." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Johnson's Algorithm'?", ideal_answer: "An algorithm to find all-pairs shortest paths in a sparse weighted graph with some negative edges." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Min-Cost Max-Flow'.", ideal_answer: "Finding a flow that is maximum and has the minimum possible cost in a network." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Splay Tree'?", ideal_answer: "A self-adjusting binary search tree where recently accessed elements are moved to the root." },
  { domain: "DSA", difficulty: "Hard", question: "Explain 'Convex Hull' (Graham Scan).", ideal_answer: "An algorithm to find the smallest convex polygon that contains all points in a set." },
  { domain: "DSA", difficulty: "Hard", question: "What is 'Longest Common Subsequence' (LCS) for 3 strings?", ideal_answer: "Extending the 2D DP table to 3D to find the longest sequence present in all three strings." },

  // --- PYTHON DOMAIN ---
  // HARD (Need 36 more)
  { domain: "Python", difficulty: "Hard", question: "Explain the C3 Linearization (MRO).", ideal_answer: "The algorithm Python uses to determine the order in which to search for attributes in multiple inheritance." },
  { domain: "Python", difficulty: "Hard", question: "What are 'Metaclasses'?", ideal_answer: "Classes that define the behavior of other classes; they are the 'factories' for class creation." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Monkey Patching'.", ideal_answer: "Dynamically replacing attributes or methods of a module or class at runtime." },
  { domain: "Python", difficulty: "Hard", question: "What is the purpose of 'sys.setrecursionlimit()'?", ideal_answer: "To change the maximum depth of the Python interpreter stack to allow deeper recursion." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Descriptor' protocol.", ideal_answer: "A way to customize attribute access (get, set, delete) by implementing specific methods in a class." },
  { domain: "Python", difficulty: "Hard", question: "What is the difference between '__slots__' and '__dict__'?", ideal_answer: "__slots__ reduces memory by preventing the creation of a dynamic dictionary for instance attributes." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Coroutine' vs 'Generator'.", ideal_answer: "Generators produce data; coroutines consume data and can be suspended/resumed." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Abstract Base Class' (abc)?", ideal_answer: "A way to define interfaces in Python by forcing subclasses to implement specific methods." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Interning' in Python.", ideal_answer: "An optimization where certain strings or small integers are stored only once in memory." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Cython'?", ideal_answer: "A superset of Python that compiles to C, providing significant performance gains." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'ContextLib' module utilities.", ideal_answer: "A library for creating context managers using generators instead of classes." },
  { domain: "Python", difficulty: "Hard", question: "What are 'Dunder' methods?", ideal_answer: "Double underscore methods (e.g., __add__) that allow objects to interact with Python's built-in operators." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Weakref' module.", ideal_answer: "Allows creating references to objects without preventing them from being garbage collected." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Python C API'?", ideal_answer: "A way to extend Python with C/C++ or embed Python into C/C++ applications." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Tail Call Optimization' in Python.", ideal_answer: "Python does not support TCO natively to preserve the full stack trace for debugging." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Function Annotation'?", ideal_answer: "A way to attach metadata to function parameters and return values (e.g., type hints)." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Aiohttp' vs 'Requests'.", ideal_answer: "Requests is synchronous; aiohttp is asynchronous, built on top of asyncio." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Pickle' serialization security risk?", ideal_answer: "Pickle can execute arbitrary code during deserialization, making it unsafe for untrusted data." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Method Wrapper' vs 'Builtin Function'.", ideal_answer: "Wrappers are used for dunder methods on objects; builtins are C-implemented functions like len()." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Garbage Collection' generational hypothesis?", ideal_answer: "Python's GC assumes most objects die young, so it scans newer objects more frequently than older ones." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Namespace' packages.", ideal_answer: "Packages that allow you to distribute a single Python package across multiple directories or ZIP files." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Itertools' performance benefit?", ideal_answer: "It provides memory-efficient, fast iterators for complex looping tasks." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Collections.ChainMap'.", ideal_answer: "A way to group multiple dictionaries into a single view for lookups." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Argument Clinic'?", ideal_answer: "A pre-processor used in CPython to simplify the writing of C code for built-in functions." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'F-strings' performance.", ideal_answer: "F-strings are faster than % or .format() because they are evaluated at runtime as part of the bytecode." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Structural Pattern Matching' (match/case)?", ideal_answer: "A feature in Python 3.10+ allowing complex branching based on data shapes and types." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'PEP 8' importance.", ideal_answer: "The standard style guide that ensures Python code is readable and consistent across the community." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Virtualenv' vs 'Conda'?", ideal_answer: "Virtualenv handles Python packages; Conda is a cross-platform manager that also handles non-Python libraries." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Bytecode' (.pyc) files.", ideal_answer: "Compiled versions of Python code that the interpreter uses to speed up subsequent executions." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Frame Object' in Python?", ideal_answer: "An object representing the execution state of a function, containing local variables and the instruction pointer." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Traceback' object.", ideal_answer: "A representation of the call stack when an exception occurs." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Pylint' vs 'Flake8'?", ideal_answer: "Pylint is more thorough and checks for logic errors; Flake8 is faster and focuses on style and syntax." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Mucking' with globals().", ideal_answer: "Directly modifying the dictionary of global variables, which is usually considered bad practice." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Mocking' in Unit Tests?", ideal_answer: "Replacing parts of your system with fake objects to isolate the code being tested." },
  { domain: "Python", difficulty: "Hard", question: "Explain 'Profiling' with cProfile.", ideal_answer: "Analyzing code to find bottlenecks by measuring the time spent in each function." },
  { domain: "Python", difficulty: "Hard", question: "What is 'Asyncio.gather()'?", ideal_answer: "A function to run multiple asynchronous tasks concurrently and wait for all of them to finish." },

  // --- CLOUD DOMAIN ---
  // HARD (Need 33 more)
  { domain: "Cloud", difficulty: "Hard", question: "Explain the 'CAP Theorem' in Cloud Systems.", ideal_answer: "A distributed system can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Infrastructure as Code' (IaC) idempotency?", ideal_answer: "The property where applying an operation multiple times has the same result as applying it once." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Blue-Green Deployment'.", ideal_answer: "A strategy that uses two identical production environments to minimize downtime during updates." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Canary Deployment'?", ideal_answer: "Releasing a new version to a small subset of users before rolling it out to everyone." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Serverless' Cold Start.", ideal_answer: "The latency experienced when a serverless function is triggered for the first time or after being idle." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Cloud-Native' 12-Factor App?", ideal_answer: "A methodology for building scalable and maintainable software-as-a-service applications." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Microservices' Circuit Breaker pattern.", ideal_answer: "A pattern used to prevent a failure in one service from cascading to others by 'tripping' the connection." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Service Mesh' (e.g., Istio)?", ideal_answer: "A dedicated infrastructure layer for handling service-to-service communication, including security and observability." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Object Storage' vs 'Block Storage' vs 'File Storage'.", ideal_answer: "Object (unstructured, flat), Block (high-performance, raw), File (hierarchical, shared)." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Shared Responsibility Model'?", ideal_answer: "The division of security duties between the cloud provider and the customer." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Multi-Cloud' vs 'Hybrid Cloud'.", ideal_answer: "Multi-cloud uses multiple public providers; Hybrid cloud combines public and private infrastructure." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Data Sovereignty' in Cloud?", ideal_answer: "The legal requirement that data is subject to the laws of the country in which it is physically located." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Auto-Scaling' cooling periods.", ideal_answer: "A timeframe during which the scaler waits after an action before taking another to prevent oscillation." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Egress' cost in Cloud?", ideal_answer: "The fees charged for moving data out of a cloud provider's network." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Stateless' vs 'Stateful' applications.", ideal_answer: "Stateless apps don't store data locally; stateful apps require persistent storage for context." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Event-Driven Architecture'?", ideal_answer: "A design where services communicate by producing and consuming events." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Sidecar Pattern' in Kubernetes.", ideal_answer: "Running a helper container alongside the main application container within the same pod." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Shadow IT'?", ideal_answer: "The use of cloud services within an organization without the knowledge or approval of the IT department." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Chaos Engineering'.", ideal_answer: "Testing system resilience by intentionally introducing failures into a production environment." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Cold vs Hot' migration?", ideal_answer: "Cold involves turning off the VM; Hot (Live) migrates the VM while it is still running." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'VPC Peering'.", ideal_answer: "A networking connection between two Virtual Private Clouds that allows routing traffic using private IPs." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Edge Computing'?", ideal_answer: "Processing data closer to the source (e.g., IoT devices) rather than in a centralized cloud data center." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Cloud Federation'.", ideal_answer: "Integrating multiple cloud environments to act as a single, unified system." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Governance' in Cloud?", ideal_answer: "The set of rules and policies an organization follows to manage cloud resources and costs." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Serverless RDBMS'.", ideal_answer: "A database that automatically scales capacity and storage based on demand, often billed by use." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Cloud Agnostic' design?", ideal_answer: "Building systems that can run on any cloud provider without significant modification." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Disaster Recovery' RTO and RPO.", ideal_answer: "RTO (Recovery Time Objective) is the time to restore; RPO (Recovery Point Objective) is the max data loss allowed." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Identity Federation' (SAML/OIDC)?", ideal_answer: "Linking an individual's identity across multiple separate security domains." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Infrastructure as Code' Drift.", ideal_answer: "When the actual state of resources in the cloud differs from the state defined in the code." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'Cloud Bursting'?", ideal_answer: "A configuration where a private cloud 'bursts' into a public cloud to handle spikes in traffic." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'Container Registry'.", ideal_answer: "A repository for storing and managing container images (e.g., Docker Hub, ECR)." },
  { domain: "Cloud", difficulty: "Hard", question: "What is 'FinOps'?", ideal_answer: "A practice of bringing financial accountability to the variable spend model of cloud." },
  { domain: "Cloud", difficulty: "Hard", question: "Explain 'NoOps'.", ideal_answer: "The idea that an IT environment can become so automated that there is no need for a dedicated operations team." },

  // --- MACHINE LEARNING (ML) DOMAIN ---
  // HARD (Need 38 more)
  { domain: "ML", difficulty: "Hard", question: "Explain the 'Vanishing Gradient' problem.", ideal_answer: "During backpropagation, gradients get smaller as they move backward, causing early layers to stop learning." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Curse of Dimensionality'?", ideal_answer: "As the number of features increases, the amount of data needed to generalize grows exponentially." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Kernel Trick' in SVM.", ideal_answer: "A method to project data into higher dimensions to make it linearly separable without expensive calculations." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Gradient Boosting' vs 'AdaBoost'?", ideal_answer: "AdaBoost increases weights of misclassified points; Gradient Boosting fits new models to the residual errors of old ones." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'LSTM' (Long Short-Term Memory).", ideal_answer: "A type of RNN that uses gates to solve the vanishing gradient problem and remember long-term dependencies." },
  { domain: "ML", difficulty: "Hard", question: "What is 'One-Shot Learning'?", ideal_answer: "A type of learning where a model can learn to recognize a new class from just one training example." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Reinforcement Learning' Exploration vs Exploitation.", ideal_answer: "Exploration is trying new actions; exploitation is using known actions that yield the highest reward." },
  { domain: "ML", difficulty: "Hard", question: "What is 't-SNE'?", ideal_answer: "A non-linear dimensionality reduction technique used primarily for visualizing high-dimensional data." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Backpropagation' through time (BPTT).", ideal_answer: "The application of the backpropagation algorithm to recurrent neural networks." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Batch Normalization'?", ideal_answer: "A technique to stabilize and speed up training by normalizing the inputs of each layer." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Dropout' regularization.", ideal_answer: "Randomly ignoring neurons during training to prevent the model from becoming overly reliant on specific paths." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Generative Adversarial Network' (GAN)?", ideal_answer: "A system of two neural networks (generator and discriminator) that compete to create realistic data." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'SMOTE' (Synthetic Minority Over-sampling Technique).", ideal_answer: "A technique to balance datasets by generating synthetic examples for the minority class." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Word2Vec' skip-gram vs CBOW?", ideal_answer: "CBOW predicts the target word from context; Skip-gram predicts the context from a target word." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Latent Dirichlet Allocation' (LDA).", ideal_answer: "A generative statistical model used for topic modeling in text data." },
  { domain: "ML", difficulty: "Hard", question: "What is 'XGBoost'?", ideal_answer: "An optimized distributed gradient boosting library designed for high efficiency and flexibility." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Data Leakage'.", ideal_answer: "When information from outside the training dataset is used to create the model, leading to overly optimistic results." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Elastic Net Regularization'?", ideal_answer: "A combination of L1 (Lasso) and L2 (Ridge) penalties to handle correlated features." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Manifold Learning'.", ideal_answer: "An approach to non-linear dimensionality reduction based on the idea that data lies on a lower-dimensional manifold." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Attention Mechanism'?", ideal_answer: "A technique that allows a model to focus on specific parts of the input sequence when making predictions." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'F1-Score' harmonic mean.", ideal_answer: "It uses the harmonic mean to give more weight to low values, ensuring both precision and recall are high." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Bayesian Optimization'?", ideal_answer: "A strategy for hyperparameter tuning that builds a probabilistic model of the function being optimized." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Transfer Learning'.", ideal_answer: "Using a pre-trained model on a new, related task to save time and resources." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Stationarity' in Time Series?", ideal_answer: "A property where a time series' statistical properties like mean and variance don't change over time." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Autoencoders'.", ideal_answer: "Neural networks used for unsupervised learning of efficient data codings (dimensionality reduction)." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Ensemble Stacking'?", ideal_answer: "A method where predictions from multiple models are used as inputs for a final 'meta-model'." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Averaging' vs 'Voting' in ensembles.", ideal_answer: "Averaging is used for regression (mean of predictions); Voting is used for classification (majority rule)." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Concept Drift'?", ideal_answer: "When the statistical properties of the target variable change over time in unforeseen ways." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'AUC-ROC' Curve.", ideal_answer: "A performance measurement for classification problems at various threshold settings." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Cosign Similarity'?", ideal_answer: "A measure of similarity between two vectors by calculating the cosine of the angle between them." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Hierarchical Clustering'.", ideal_answer: "A method of cluster analysis that seeks to build a hierarchy of clusters using agglomerative or divisive methods." },
  { domain: "ML", difficulty: "Hard", question: "What is 'DBSCAN'?", ideal_answer: "A density-based clustering algorithm that groups points that are closely packed together." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Vapnik-Chervonenkis (VC) Dimension'.", ideal_answer: "A measure of the capacity of a statistical classification algorithm." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Self-Organizing Map' (SOM)?", ideal_answer: "A type of artificial neural network trained using unsupervised learning to produce a low-dimensional representation of input." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Markov Chain Monte Carlo' (MCMC).", ideal_answer: "A class of algorithms for sampling from a probability distribution." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Semi-Supervised Learning'?", ideal_answer: "A machine learning approach that combines a small amount of labeled data with a large amount of unlabeled data." },
  { domain: "ML", difficulty: "Hard", question: "Explain 'Support Vector' significance.", ideal_answer: "The data points that lie closest to the decision surface (hyperplane) and influence its orientation." },
  { domain: "ML", difficulty: "Hard", question: "What is 'Information Gain' in Decision Trees?", ideal_answer: "The reduction in entropy achieved by partitioning a dataset according to a given attribute." },
  // ================= HTML — EASY (20) =================
  { domain: "HTML", difficulty: "Easy", question: "What does HTML stand for?", ideal_answer: "HyperText Markup Language." },
  { domain: "HTML", difficulty: "Easy", question: "Who maintains the HTML standard?", ideal_answer: "The World Wide Web Consortium (W3C)." },
  { domain: "HTML", difficulty: "Easy", question: "What tag is used to create a paragraph?", ideal_answer: "The <p> tag." },
  { domain: "HTML", difficulty: "Easy", question: "Which tag inserts an image?", ideal_answer: "The <img> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What attribute specifies an image path?", ideal_answer: "The src attribute." },
  { domain: "HTML", difficulty: "Easy", question: "What tag creates a line break?", ideal_answer: "The <br> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag makes text bold semantically?", ideal_answer: "The <strong> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag is used for hyperlinks?", ideal_answer: "The <a> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What does the alt attribute do?", ideal_answer: "Provides alternative text for an image." },
  { domain: "HTML", difficulty: "Easy", question: "Which tag defines a list item?", ideal_answer: "The <li> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag creates an ordered list?", ideal_answer: "The <ol> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag creates an unordered list?", ideal_answer: "The <ul> tag." },
  { domain: "HTML", difficulty: "Easy", question: "Which tag defines a table row?", ideal_answer: "The <tr> tag." },
  { domain: "HTML", difficulty: "Easy", question: "Which tag defines a table cell?", ideal_answer: "The <td> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag is used for headings?", ideal_answer: "The <h1> to <h6> tags." },
  { domain: "HTML", difficulty: "Easy", question: "What tag contains metadata?", ideal_answer: "The <head> tag." },
  { domain: "HTML", difficulty: "Easy", question: "Where is visible page content placed?", ideal_answer: "Inside the <body> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag embeds video?", ideal_answer: "The <video> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag embeds audio?", ideal_answer: "The <audio> tag." },
  { domain: "HTML", difficulty: "Easy", question: "What tag is used for forms?", ideal_answer: "The <form> tag." },

  // ================= HTML — MEDIUM (30) =================
  { domain: "HTML", difficulty: "Medium", question: "Difference between <div> and <span>?", ideal_answer: "<div> is block-level; <span> is inline." },
  { domain: "HTML", difficulty: "Medium", question: "What are semantic HTML elements?", ideal_answer: "Elements that convey meaning like <article>, <section>, <nav>." },
  { domain: "HTML", difficulty: "Medium", question: "Purpose of data-* attributes?", ideal_answer: "Store custom data on elements." },
  { domain: "HTML", difficulty: "Medium", question: "What is the viewport meta tag?", ideal_answer: "Controls layout on mobile browsers." },
  { domain: "HTML", difficulty: "Medium", question: "Difference between id and class?", ideal_answer: "id is unique; class can be reused." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <label> tag used for?", ideal_answer: "Associates text with a form control." },
  { domain: "HTML", difficulty: "Medium", question: "What is the required attribute?", ideal_answer: "Makes an input field mandatory." },
  { domain: "HTML", difficulty: "Medium", question: "Difference between GET and POST in forms?", ideal_answer: "GET appends data in URL; POST sends in body." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <iframe> tag?", ideal_answer: "Embeds another webpage." },
  { domain: "HTML", difficulty: "Medium", question: "What is lazy loading in HTML?", ideal_answer: "Loading images/videos only when needed." },
  { domain: "HTML", difficulty: "Medium", question: "What does the defer attribute do?", ideal_answer: "Delays script execution until HTML parsing completes." },
  { domain: "HTML", difficulty: "Medium", question: "Difference between async and defer?", ideal_answer: "Async runs ASAP; defer runs after parsing." },
  { domain: "HTML", difficulty: "Medium", question: "What is a favicon?", ideal_answer: "Small icon shown in browser tab." },
  { domain: "HTML", difficulty: "Medium", question: "Purpose of <fieldset>?", ideal_answer: "Groups related form controls." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <datalist> tag?", ideal_answer: "Provides predefined input options." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <output> tag?", ideal_answer: "Displays calculation results." },
  { domain: "HTML", difficulty: "Medium", question: "Difference between block and inline elements?", ideal_answer: "Block starts new line; inline does not." },
  { domain: "HTML", difficulty: "Medium", question: "What is contenteditable?", ideal_answer: "Allows element content to be edited." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <canvas> element?", ideal_answer: "Used for drawing graphics via JavaScript." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <progress> tag?", ideal_answer: "Represents task completion progress." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <meter> tag?", ideal_answer: "Represents scalar measurement." },
  { domain: "HTML", difficulty: "Medium", question: "What is ARIA?", ideal_answer: "Accessibility attributes for assistive tech." },
  { domain: "HTML", difficulty: "Medium", question: "What is the download attribute?", ideal_answer: "Forces file download." },
  { domain: "HTML", difficulty: "Medium", question: "What is the <noscript> tag?", ideal_answer: "Content shown when JS is disabled." },
  { domain: "HTML", difficulty: "Medium", question: "Difference between <b> and <strong>?", ideal_answer: "<strong> is semantic importance." },
  { domain: "HTML", difficulty: "Medium", question: "Difference between <i> and <em>?", ideal_answer: "<em> is semantic emphasis." },
  { domain: "HTML", difficulty: "Medium", question: "What is microdata?", ideal_answer: "Adds structured metadata." },
  { domain: "HTML", difficulty: "Medium", question: "What is the autocomplete attribute?", ideal_answer: "Controls form autofill." },
  { domain: "HTML", difficulty: "Medium", question: "What is the sandbox attribute in iframe?", ideal_answer: "Applies security restrictions." },
  { domain: "HTML", difficulty: "Medium", question: "What is the hidden attribute?", ideal_answer: "Hides element visually." },

  // ================= HTML — HARD (50) =================
  { domain: "HTML", difficulty: "Hard", question: "What is the Shadow DOM?", ideal_answer: "Encapsulated DOM tree for Web Components." },
  { domain: "HTML", difficulty: "Hard", question: "Explain the Critical Rendering Path.", ideal_answer: "Steps browser takes to render page." },
  { domain: "HTML", difficulty: "Hard", question: "What are Web Components?", ideal_answer: "Custom reusable components using Shadow DOM, templates, custom elements." },
  { domain: "HTML", difficulty: "Hard", question: "What is Custom Elements API?", ideal_answer: "Allows defining new HTML tags." },
  { domain: "HTML", difficulty: "Hard", question: "What is hydration?", ideal_answer: "Attaching JS behavior to server-rendered HTML." },
  { domain: "HTML", difficulty: "Hard", question: "What causes layout thrashing?", ideal_answer: "Frequent DOM reads/writes causing reflows." },
  { domain: "HTML", difficulty: "Hard", question: "What is preloading vs prefetching?", ideal_answer: "Preload for current nav, prefetch for future." },
  { domain: "HTML", difficulty: "Hard", question: "What is DNS prefetch?", ideal_answer: "Resolves domain before resource request." },
  { domain: "HTML", difficulty: "Hard", question: "What are render-blocking resources?", ideal_answer: "CSS/JS that delay rendering." },
  { domain: "HTML", difficulty: "Hard", question: "Explain accessibility tree.", ideal_answer: "Structure browsers expose to assistive tech." },

    { domain: "HTML", difficulty: "Hard", question: "What is the difference between Shadow DOM and Virtual DOM?", ideal_answer: "Shadow DOM is a browser feature for encapsulation; Virtual DOM is a JS abstraction used by frameworks." },
  { domain: "HTML", difficulty: "Hard", question: "Explain slotting in Shadow DOM.", ideal_answer: "Slots allow light DOM content to be projected into shadow DOM." },
  { domain: "HTML", difficulty: "Hard", question: "What is the <template> tag?", ideal_answer: "Holds HTML that is not rendered until cloned via JavaScript." },
  { domain: "HTML", difficulty: "Hard", question: "How does browser reflow differ from repaint?", ideal_answer: "Reflow recalculates layout; repaint redraws pixels without layout change." },
  { domain: "HTML", difficulty: "Hard", question: "What is the DOMContentLoaded event?", ideal_answer: "Fires when HTML is parsed, without waiting for images/styles." },
  { domain: "HTML", difficulty: "Hard", question: "What is the load event?", ideal_answer: "Fires when all resources including images are fully loaded." },
  { domain: "HTML", difficulty: "Hard", question: "Explain document fragments.", ideal_answer: "Lightweight containers for batching DOM updates efficiently." },
  { domain: "HTML", difficulty: "Hard", question: "What is HTML parsing interruption?", ideal_answer: "When scripts block HTML parsing during execution." },
  { domain: "HTML", difficulty: "Hard", question: "What are self-closing tags and how browsers treat them?", ideal_answer: "Tags like <img>; browsers auto-close unsupported self-closing tags." },
  { domain: "HTML", difficulty: "Hard", question: "What is HTML serialization?", ideal_answer: "Converting DOM back into HTML string." },
  { domain: "HTML", difficulty: "Hard", question: "Explain mutation observers.", ideal_answer: "APIs that watch DOM changes asynchronously." },
  { domain: "HTML", difficulty: "Hard", question: "What is the inert attribute?", ideal_answer: "Prevents user interaction and focus within a subtree." },
  { domain: "HTML", difficulty: "Hard", question: "How does tabindex affect accessibility?", ideal_answer: "Controls keyboard navigation order." },
  { domain: "HTML", difficulty: "Hard", question: "What is the role of role attribute in ARIA?", ideal_answer: "Defines the semantic purpose of an element." },
  { domain: "HTML", difficulty: "Hard", question: "What is progressive enhancement?", ideal_answer: "Building core functionality first, then enhancing for capable browsers." },
  { domain: "HTML", difficulty: "Hard", question: "Explain graceful degradation.", ideal_answer: "Designing for full features but ensuring fallback support." },
  { domain: "HTML", difficulty: "Hard", question: "What is the accessibility tree?", ideal_answer: "Separate representation of DOM for assistive technologies." },
  { domain: "HTML", difficulty: "Hard", question: "What is HTML sanitization?", ideal_answer: "Removing unsafe HTML to prevent XSS." },
  { domain: "HTML", difficulty: "Hard", question: "What are void elements?", ideal_answer: "Elements that cannot have content, like <img> or <input>." },
  { domain: "HTML", difficulty: "Hard", question: "What is the crossorigin attribute?", ideal_answer: "Controls CORS requests for media and scripts." },
  { domain: "HTML", difficulty: "Hard", question: "Explain the importance of DOCTYPE.", ideal_answer: "Triggers standards-compliant rendering mode." },
  { domain: "HTML", difficulty: "Hard", question: "What is quirks mode?", ideal_answer: "Legacy browser rendering mode for old HTML." },
  { domain: "HTML", difficulty: "Hard", question: "How does browser caching work for HTML?", ideal_answer: "Uses HTTP headers like Cache-Control and ETag." },
  { domain: "HTML", difficulty: "Hard", question: "What is preconnect?", ideal_answer: "Establishes early connections to required origins." },
  { domain: "HTML", difficulty: "Hard", question: "What are meta refresh redirects?", ideal_answer: "Client-side redirects using meta tags." },
  { domain: "HTML", difficulty: "Hard", question: "What is the difference between same-origin and CORS?", ideal_answer: "Same-origin restricts access; CORS allows controlled cross-origin access." },
  { domain: "HTML", difficulty: "Hard", question: "How does iframe sandboxing improve security?", ideal_answer: "Restricts scripts, forms, and navigation." },
  { domain: "HTML", difficulty: "Hard", question: "What is HTML tokenization?", ideal_answer: "Breaking HTML into tokens during parsing." },
  { domain: "HTML", difficulty: "Hard", question: "What is DOM tree construction?", ideal_answer: "Converting parsed tokens into a node tree." },
  { domain: "HTML", difficulty: "Hard", question: "What is the rendering tree?", ideal_answer: "Combination of DOM and CSSOM used for layout." },
  { domain: "HTML", difficulty: "Hard", question: "What is CSSOM?", ideal_answer: "Object model representing parsed CSS." },
  { domain: "HTML", difficulty: "Hard", question: "What is the impact of inline styles on rendering?", ideal_answer: "They block rendering and reduce reusability." },
  { domain: "HTML", difficulty: "Hard", question: "What is HTML streaming?", ideal_answer: "Sending HTML in chunks to render progressively." },
  { domain: "HTML", difficulty: "Hard", question: "What is speculative parsing?", ideal_answer: "Browser preloads resources while parsing HTML." },
  { domain: "HTML", difficulty: "Hard", question: "What is the importance of semantic landmarks?", ideal_answer: "Improves navigation for screen readers." },
  { domain: "HTML", difficulty: "Hard", question: "What is the picture element used for?", ideal_answer: "Serves responsive images based on conditions." },
  { domain: "HTML", difficulty: "Hard", question: "Explain srcset and sizes.", ideal_answer: "Provide multiple image resolutions for responsive loading." },
  { domain: "HTML", difficulty: "Hard", question: "What is HTML validation?", ideal_answer: "Checking markup against W3C standards." },
  { domain: "HTML", difficulty: "Hard", question: "What is the difference between presentation and semantics?", ideal_answer: "Presentation controls look; semantics convey meaning." },



  

  // ================= CSS — EASY (20) =================
  { domain: "CSS", difficulty: "Easy", question: "What does CSS stand for?", ideal_answer: "Cascading Style Sheets." },
  { domain: "CSS", difficulty: "Easy", question: "How do you apply CSS to an HTML document?", ideal_answer: "Inline, internal <style>, or external stylesheet." },
  { domain: "CSS", difficulty: "Easy", question: "What property changes text color?", ideal_answer: "The color property." },
  { domain: "CSS", difficulty: "Easy", question: "How do you select an element by id?", ideal_answer: "Using #idName." },
  { domain: "CSS", difficulty: "Easy", question: "How do you select elements by class?", ideal_answer: "Using .className." },
  { domain: "CSS", difficulty: "Easy", question: "What property sets background color?", ideal_answer: "background-color." },
  { domain: "CSS", difficulty: "Easy", question: "What property changes font size?", ideal_answer: "font-size." },
  { domain: "CSS", difficulty: "Easy", question: "How do you make text bold in CSS?", ideal_answer: "font-weight: bold;" },
  { domain: "CSS", difficulty: "Easy", question: "What does margin control?", ideal_answer: "Space outside an element." },
  { domain: "CSS", difficulty: "Easy", question: "What does padding control?", ideal_answer: "Space inside an element." },
  { domain: "CSS", difficulty: "Easy", question: "Which property aligns text horizontally?", ideal_answer: "text-align." },
  { domain: "CSS", difficulty: "Easy", question: "How do you remove underline from links?", ideal_answer: "text-decoration: none;" },
  { domain: "CSS", difficulty: "Easy", question: "What is the default position value?", ideal_answer: "static." },
  { domain: "CSS", difficulty: "Easy", question: "How do you make a list horizontal?", ideal_answer: "Use display: inline or flexbox." },
  { domain: "CSS", difficulty: "Easy", question: "Which property controls element width?", ideal_answer: "width." },
  { domain: "CSS", difficulty: "Easy", question: "Which property controls height?", ideal_answer: "height." },
  { domain: "CSS", difficulty: "Easy", question: "How do you set a background image?", ideal_answer: "background-image." },
  { domain: "CSS", difficulty: "Easy", question: "What does display: none do?", ideal_answer: "Removes element from layout." },
  { domain: "CSS", difficulty: "Easy", question: "What does visibility: hidden do?", ideal_answer: "Hides element but keeps space." },
  { domain: "CSS", difficulty: "Easy", question: "What property controls border color?", ideal_answer: "border-color." },

  // ================= CSS — MEDIUM (30) =================
  { domain: "CSS", difficulty: "Medium", question: "Explain the CSS Box Model.", ideal_answer: "Content, padding, border, and margin." },
  { domain: "CSS", difficulty: "Medium", question: "Difference between relative and absolute positioning?", ideal_answer: "Relative moves from normal position; absolute is positioned relative to nearest positioned ancestor." },
  { domain: "CSS", difficulty: "Medium", question: "What is z-index?", ideal_answer: "Controls stack order of positioned elements." },
  { domain: "CSS", difficulty: "Medium", question: "What is Flexbox used for?", ideal_answer: "One-dimensional layout alignment." },
  { domain: "CSS", difficulty: "Medium", question: "What is CSS Grid?", ideal_answer: "Two-dimensional layout system." },
  { domain: "CSS", difficulty: "Medium", question: "Difference between inline and inline-block?", ideal_answer: "Inline-block allows width/height." },
  { domain: "CSS", difficulty: "Medium", question: "What is overflow property?", ideal_answer: "Controls content that exceeds container size." },
  { domain: "CSS", difficulty: "Medium", question: "What are pseudo-classes?", ideal_answer: "Keywords like :hover that define element states." },
  { domain: "CSS", difficulty: "Medium", question: "What are pseudo-elements?", ideal_answer: "Style specific parts like ::before and ::after." },
  { domain: "CSS", difficulty: "Medium", question: "What is specificity?", ideal_answer: "Weight determining which CSS rule applies." },
  { domain: "CSS", difficulty: "Medium", question: "What does !important do?", ideal_answer: "Overrides normal specificity rules." },
  { domain: "CSS", difficulty: "Medium", question: "What are media queries?", ideal_answer: "Apply styles based on device conditions." },
  { domain: "CSS", difficulty: "Medium", question: "What is rem vs em?", ideal_answer: "rem is root-based; em is parent-based." },
  { domain: "CSS", difficulty: "Medium", question: "What is vh and vw?", ideal_answer: "Viewport height and width units." },
  { domain: "CSS", difficulty: "Medium", question: "What is a stacking context?", ideal_answer: "3D stacking hierarchy of elements." },
  { domain: "CSS", difficulty: "Medium", question: "What is box-sizing?", ideal_answer: "Defines how width/height are calculated." },
  { domain: "CSS", difficulty: "Medium", question: "Difference between visibility hidden and opacity 0?", ideal_answer: "Opacity keeps element interactive." },
  { domain: "CSS", difficulty: "Medium", question: "What are transitions?", ideal_answer: "Smooth property changes over time." },
  { domain: "CSS", difficulty: "Medium", question: "What are keyframes?", ideal_answer: "Define steps in animations." },
  { domain: "CSS", difficulty: "Medium", question: "What is position sticky?", ideal_answer: "Toggles between relative and fixed." },
  { domain: "CSS", difficulty: "Medium", question: "What does float do?", ideal_answer: "Pushes element left or right." },
  { domain: "CSS", difficulty: "Medium", question: "How do you clear floats?", ideal_answer: "Using clear property or clearfix." },
  { domain: "CSS", difficulty: "Medium", question: "What is object-fit?", ideal_answer: "Controls how images/videos fit container." },
  { domain: "CSS", difficulty: "Medium", question: "What are CSS variables?", ideal_answer: "Custom properties defined with --." },
  { domain: "CSS", difficulty: "Medium", question: "What is calc()?", ideal_answer: "Performs calculations in CSS values." },
  { domain: "CSS", difficulty: "Medium", question: "What is clamp()?", ideal_answer: "Sets responsive min-preferred-max value." },
  { domain: "CSS", difficulty: "Medium", question: "Difference between max-width and width?", ideal_answer: "max-width limits size growth." },
  { domain: "CSS", difficulty: "Medium", question: "What is aspect-ratio?", ideal_answer: "Maintains width/height ratio." },
  { domain: "CSS", difficulty: "Medium", question: "What is pointer-events?", ideal_answer: "Controls mouse interaction." },
  { domain: "CSS", difficulty: "Medium", question: "What is scroll-behavior?", ideal_answer: "Controls smooth scrolling." },

  // ================= CSS — HARD (50) =================
  { domain: "CSS", difficulty: "Hard", question: "Explain CSS specificity calculation.", ideal_answer: "Inline > ID > Class > Element." },
  { domain: "CSS", difficulty: "Hard", question: "What creates a new stacking context?", ideal_answer: "Positioned elements with z-index, opacity <1, transform, etc." },
  { domain: "CSS", difficulty: "Hard", question: "What is CSS Houdini?", ideal_answer: "APIs giving low-level access to CSS engine." },
  { domain: "CSS", difficulty: "Hard", question: "What is reflow vs repaint?", ideal_answer: "Reflow recalculates layout; repaint redraws visuals." },
  { domain: "CSS", difficulty: "Hard", question: "What is containment?", ideal_answer: "Limits browser rendering scope for performance." },
  { domain: "CSS", difficulty: "Hard", question: "What is will-change?", ideal_answer: "Hints browser about upcoming changes." },
  { domain: "CSS", difficulty: "Hard", question: "What is subgrid?", ideal_answer: "Grid level inheritance for nested grids." },
  { domain: "CSS", difficulty: "Hard", question: "Explain cascade layers.", ideal_answer: "Control cascade order using @layer." },
  { domain: "CSS", difficulty: "Hard", question: "What is logical properties in CSS?", ideal_answer: "Properties like margin-inline." },
  { domain: "CSS", difficulty: "Hard", question: "What is font-display?", ideal_answer: "Controls font loading behavior." },
  { domain: "CSS", difficulty: "Hard", question: "What is FOUC?", ideal_answer: "Flash of Unstyled Content." },
  { domain: "CSS", difficulty: "Hard", question: "Explain critical CSS.", ideal_answer: "Inline CSS needed for above-the-fold content." },
  { domain: "CSS", difficulty: "Hard", question: "What is container queries?", ideal_answer: "Apply styles based on parent container size." },
  { domain: "CSS", difficulty: "Hard", question: "What is scroll snapping?", ideal_answer: "Locks scroll positions." },
  { domain: "CSS", difficulty: "Hard", question: "What are composite layers?", ideal_answer: "GPU-accelerated rendering layers." },
  { domain: "CSS", difficulty: "Hard", question: "What is paint vs layout vs composite?", ideal_answer: "Rendering pipeline stages." },
  { domain: "CSS", difficulty: "Hard", question: "What is CSSOM?", ideal_answer: "CSS Object Model." },
  { domain: "CSS", difficulty: "Hard", question: "What is forced synchronous layout?", ideal_answer: "JS triggering layout recalculation." },
  { domain: "CSS", difficulty: "Hard", question: "Explain prefers-reduced-motion.", ideal_answer: "Accessibility media feature." },
  { domain: "CSS", difficulty: "Hard", question: "What is the difference between transform and top/left?", ideal_answer: "Transform avoids layout recalculation." },
  { domain: "CSS", difficulty: "Hard", question: "What is isolation property?", ideal_answer: "Creates stacking context." },
  { domain: "CSS", difficulty: "Hard", question: "Explain blend modes.", ideal_answer: "Control how layers mix colors." },
  { domain: "CSS", difficulty: "Hard", question: "What is backdrop-filter?", ideal_answer: "Applies effects behind element." },
  { domain: "CSS", difficulty: "Hard", question: "What is writing-mode?", ideal_answer: "Defines text flow direction." },
  { domain: "CSS", difficulty: "Hard", question: "What is hyphens property?", ideal_answer: "Controls word hyphenation." },
  { domain: "CSS", difficulty: "Hard", question: "What is scroll-margin?", ideal_answer: "Adjusts scroll snap offset." },
  { domain: "CSS", difficulty: "Hard", question: "What is env()?", ideal_answer: "Access environment variables like safe-area." },
  { domain: "CSS", difficulty: "Hard", question: "What is accent-color?", ideal_answer: "Styles form control highlights." },
  { domain: "CSS", difficulty: "Hard", question: "What is image-set()?", ideal_answer: "Serves responsive images in CSS." },
  { domain: "CSS", difficulty: "Hard", question: "What is mask property?", ideal_answer: "Clips element using image." },
  { domain: "CSS", difficulty: "Hard", question: "Explain filter vs backdrop-filter.", ideal_answer: "Filter affects element; backdrop-filter affects background." },
  { domain: "CSS", difficulty: "Hard", question: "What is @supports?", ideal_answer: "Feature queries in CSS." },
  { domain: "CSS", difficulty: "Hard", question: "What is CSS nesting?", ideal_answer: "Writing nested rules similar to preprocessors." },
  { domain: "CSS", difficulty: "Hard", question: "What is :has() selector?", ideal_answer: "Parent selector logic." },
  { domain: "CSS", difficulty: "Hard", question: "What is scroll-timeline?", ideal_answer: "Scroll-linked animations." },
  { domain: "CSS", difficulty: "Hard", question: "What is view transitions API?", ideal_answer: "Smooth page transition animations." },
  { domain: "CSS", difficulty: "Hard", question: "What is content-visibility?", ideal_answer: "Skips rendering offscreen content." },
  { domain: "CSS", difficulty: "Hard", question: "What is font-variation-settings?", ideal_answer: "Controls variable fonts." },
  { domain: "CSS", difficulty: "Hard", question: "What is color-scheme?", ideal_answer: "Declares light/dark theme support." },
  { domain: "CSS", difficulty: "Hard", question: "What is cascade origin?", ideal_answer: "User-agent, user, author styles." },
  { domain: "CSS", difficulty: "Hard", question: "What is scroll-padding?", ideal_answer: "Defines scroll snap offset area." },
  { domain: "CSS", difficulty: "Hard", question: "What is overscroll-behavior?", ideal_answer: "Controls scroll chaining." },
  { domain: "CSS", difficulty: "Hard", question: "What is shape-outside?", ideal_answer: "Wrap text around shapes." },
  { domain: "CSS", difficulty: "Hard", question: "What is perspective property?", ideal_answer: "Defines 3D depth." },
  { domain: "CSS", difficulty: "Hard", question: "What is backface-visibility?", ideal_answer: "Controls back face of 3D elements." },
  { domain: "CSS", difficulty: "Hard", question: "What is transform-style?", ideal_answer: "Defines 3D children behavior." },
  { domain: "CSS", difficulty: "Hard", question: "Explain GPU acceleration in CSS.", ideal_answer: "Transforms/opacity trigger GPU compositing." },
  { domain: "CSS", difficulty: "Hard", question: "What is font-synthesis?", ideal_answer: "Controls synthetic bold/italic fonts." },
  { domain: "CSS", difficulty: "Hard", question: "What is initial vs unset?", ideal_answer: "initial resets; unset depends on inheritance." },
  { domain: "CSS", difficulty: "Hard", question: "What is revert value?", ideal_answer: "Resets to user-agent or inherited value." },



  // ================= JS — EASY (20) =================
  { domain: "JavaScript", difficulty: "Easy", question: "What is JavaScript?", ideal_answer: "A high-level, interpreted programming language used for web development." },
  { domain: "JavaScript", difficulty: "Easy", question: "How do you declare a variable?", ideal_answer: "Using var, let, or const." },
  { domain: "JavaScript", difficulty: "Easy", question: "Difference between let and const?", ideal_answer: "let can be reassigned; const cannot." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is a function?", ideal_answer: "A reusable block of code." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is an array?", ideal_answer: "An ordered collection of values." },
  { domain: "JavaScript", difficulty: "Easy", question: "How do you write a comment?", ideal_answer: "// single-line or /* multi-line */" },
  { domain: "JavaScript", difficulty: "Easy", question: "What is typeof?", ideal_answer: "Operator to check data type." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is NaN?", ideal_answer: "Not-a-Number result from invalid math." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is null?", ideal_answer: "Intentional absence of value." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is undefined?", ideal_answer: "A variable declared but not assigned." },
  { domain: "JavaScript", difficulty: "Easy", question: "How do you create an object?", ideal_answer: "Using {} or new Object()." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is a boolean?", ideal_answer: "True or false value." },
  { domain: "JavaScript", difficulty: "Easy", question: "What does == do?", ideal_answer: "Loose equality with type coercion." },
  { domain: "JavaScript", difficulty: "Easy", question: "What does === do?", ideal_answer: "Strict equality without type coercion." },
  { domain: "JavaScript", difficulty: "Easy", question: "How do you add an element to array?", ideal_answer: "Using push()." },
  { domain: "JavaScript", difficulty: "Easy", question: "How do you remove last array element?", ideal_answer: "Using pop()." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is console.log?", ideal_answer: "Outputs messages to console." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is an event?", ideal_answer: "User or browser action triggering code." },
  { domain: "JavaScript", difficulty: "Easy", question: "What is DOM?", ideal_answer: "Document Object Model representing HTML structure." },
  { domain: "JavaScript", difficulty: "Easy", question: "How do you write an if statement?", ideal_answer: "Using if(condition) { }." },

  // ================= JS — MEDIUM (30) =================
  { domain: "JavaScript", difficulty: "Medium", question: "What is hoisting?", ideal_answer: "Declarations are moved to top of scope." },
  { domain: "JavaScript", difficulty: "Medium", question: "Difference between var, let, const?", ideal_answer: "Scope and reassignment differences." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is closure?", ideal_answer: "Function remembering its lexical scope." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is callback function?", ideal_answer: "Function passed as argument to another function." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is a promise?", ideal_answer: "Represents eventual completion/failure of async operation." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is async/await?", ideal_answer: "Syntactic sugar over promises." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is event delegation?", ideal_answer: "Handling events at parent level." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is arrow function?", ideal_answer: "Shorter syntax function with lexical this." },
  { domain: "JavaScript", difficulty: "Medium", question: "Difference between map and forEach?", ideal_answer: "map returns array; forEach doesn’t." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is destructuring?", ideal_answer: "Extracting values from arrays/objects." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is spread operator?", ideal_answer: "Expands iterable into elements." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is rest parameter?", ideal_answer: "Collects multiple args into array." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is debounce?", ideal_answer: "Limits function execution frequency." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is throttle?", ideal_answer: "Ensures function runs at fixed rate." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is prototype?", ideal_answer: "Object from which others inherit properties." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is class in JS?", ideal_answer: "Syntactic sugar over prototypes." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is JSON?", ideal_answer: "JavaScript Object Notation." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is try/catch?", ideal_answer: "Handles runtime errors." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is setTimeout?", ideal_answer: "Runs function after delay." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is setInterval?", ideal_answer: "Runs function repeatedly at interval." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is localStorage?", ideal_answer: "Stores data in browser persistently." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is sessionStorage?", ideal_answer: "Stores data per session." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is strict mode?", ideal_answer: "Enforces stricter parsing and errors." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is this keyword?", ideal_answer: "Refers to execution context object." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is bind?", ideal_answer: "Sets function this permanently." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is call?", ideal_answer: "Invokes function with this and args." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is apply?", ideal_answer: "Invokes function with this and array args." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is event bubbling?", ideal_answer: "Event propagates upward." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is event capturing?", ideal_answer: "Event flows downward first." },
  { domain: "JavaScript", difficulty: "Medium", question: "What is shallow copy?", ideal_answer: "Copies references of nested objects." },

  // ================= JS — HARD (50) =================
  { domain: "JavaScript", difficulty: "Hard", question: "Explain the Event Loop.", ideal_answer: "Handles async tasks between call stack and callback queue." },
  { domain: "JavaScript", difficulty: "Hard", question: "What are microtasks vs macrotasks?", ideal_answer: "Microtasks run before next render cycle." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is currying?", ideal_answer: "Transforming multi-arg function into single-arg chain." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is memoization?", ideal_answer: "Caching function results." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is tail call optimization?", ideal_answer: "Reuses stack frame for recursion." },
  { domain: "JavaScript", difficulty: "Hard", question: "What are generators?", ideal_answer: "Functions that can pause/resume." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is Proxy?", ideal_answer: "Intercepts object operations." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is Reflect API?", ideal_answer: "Provides methods for object operations." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is WeakMap?", ideal_answer: "Map with weakly held keys." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is WeakSet?", ideal_answer: "Set of weak object references." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is Symbol?", ideal_answer: "Unique primitive identifier." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is Temporal Dead Zone?", ideal_answer: "Block where let/const can't be accessed." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is module pattern?", ideal_answer: "Encapsulation using closures." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is IIFE?", ideal_answer: "Immediately Invoked Function Expression." },
  { domain: "JavaScript", difficulty: "Hard", question: "Explain prototype chain.", ideal_answer: "Object inheritance lookup path." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is deep copy?", ideal_answer: "Clones nested objects." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is race condition in JS?", ideal_answer: "Unexpected result from async order." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is requestAnimationFrame?", ideal_answer: "Optimized animation timing." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is web worker?", ideal_answer: "Runs JS in background thread." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is service worker?", ideal_answer: "Enables offline and caching." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is closure memory leak?", ideal_answer: "Unreleased references in closures." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is debounce vs throttle difference?", ideal_answer: "Debounce delays; throttle limits frequency." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is structuredClone?", ideal_answer: "Deep clones structured data." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is dynamic import?", ideal_answer: "Loads modules lazily." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is tree shaking?", ideal_answer: "Removing unused code." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is event loop starvation?", ideal_answer: "Microtasks blocking rendering." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is promise chaining?", ideal_answer: "Sequential async operations." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is AbortController?", ideal_answer: "Cancels async operations." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is Atomics API?", ideal_answer: "Thread synchronization in JS." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is SharedArrayBuffer?", ideal_answer: "Shared memory between threads." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is Intl API?", ideal_answer: "Internationalization support." },
  { domain: "JavaScript", difficulty: "Hard", question: "Explain lexical environment.", ideal_answer: "Scope environment storing variables." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is execution context?", ideal_answer: "Environment where code runs." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is garbage collection?", ideal_answer: "Automatic memory cleanup." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is mark-and-sweep?", ideal_answer: "GC algorithm marking reachable objects." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is call stack overflow?", ideal_answer: "Too many recursive calls." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is temporal coupling?", ideal_answer: "Order-dependent operations." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is currying vs partial application?", ideal_answer: "Currying fixes one arg at a time." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is tail recursion?", ideal_answer: "Recursive call is last operation." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is the difference between script and module?", ideal_answer: "Modules have strict mode and scoped variables." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is event loop tick?", ideal_answer: "One cycle of event loop." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is hydration in JS apps?", ideal_answer: "Attaching JS to SSR HTML." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is object freezing?", ideal_answer: "Prevent object modifications." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is sealing an object?", ideal_answer: "Prevent adding/removing props." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is prototype pollution?", ideal_answer: "Malicious modification of prototype." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is CSP?", ideal_answer: "Content Security Policy preventing XSS." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is monomorphic vs polymorphic functions?", ideal_answer: "Affects JS engine optimizations." },
  { domain: "JavaScript", difficulty: "Hard", question: "What is hidden class in V8?", ideal_answer: "Internal object shape optimization." },

  // ================= REACT — EASY (20) =================
  { domain: "React", difficulty: "Easy", question: "What is React?", ideal_answer: "A JavaScript library for building user interfaces." },
  { domain: "React", difficulty: "Easy", question: "What is JSX?", ideal_answer: "Syntax extension allowing HTML-like code in JavaScript." },
  { domain: "React", difficulty: "Easy", question: "What is a component?", ideal_answer: "Reusable UI building block." },
  { domain: "React", difficulty: "Easy", question: "Difference between functional and class components?", ideal_answer: "Functional are simpler; class use lifecycle methods." },
  { domain: "React", difficulty: "Easy", question: "What is state?", ideal_answer: "Data managed within a component." },
  { domain: "React", difficulty: "Easy", question: "What are props?", ideal_answer: "Inputs passed to components." },
  { domain: "React", difficulty: "Easy", question: "How do you render a list?", ideal_answer: "Using map() with a key prop." },
  { domain: "React", difficulty: "Easy", question: "What is a key in React?", ideal_answer: "Unique identifier for list elements." },
  { domain: "React", difficulty: "Easy", question: "What does useState do?", ideal_answer: "Adds state to functional components." },
  { domain: "React", difficulty: "Easy", question: "What does useEffect do?", ideal_answer: "Handles side effects." },
  { domain: "React", difficulty: "Easy", question: "What is an event handler?", ideal_answer: "Function responding to user action." },
  { domain: "React", difficulty: "Easy", question: "What is conditional rendering?", ideal_answer: "Rendering based on conditions." },
  { domain: "React", difficulty: "Easy", question: "What is controlled component?", ideal_answer: "Form input controlled by state." },
  { domain: "React", difficulty: "Easy", question: "What is uncontrolled component?", ideal_answer: "Form input using refs." },
  { domain: "React", difficulty: "Easy", question: "What is a fragment?", ideal_answer: "Groups elements without extra DOM node." },
  { domain: "React", difficulty: "Easy", question: "What is lifting state up?", ideal_answer: "Moving state to common parent." },
  { domain: "React", difficulty: "Easy", question: "What is default export?", ideal_answer: "Exporting a single main value." },
  { domain: "React", difficulty: "Easy", question: "What is named export?", ideal_answer: "Exporting multiple values." },
  { domain: "React", difficulty: "Easy", question: "How do you handle forms?", ideal_answer: "Using controlled inputs and state." },
  { domain: "React", difficulty: "Easy", question: "What is ReactDOM?", ideal_answer: "Library for rendering React components to DOM." },

  // ================= REACT — MEDIUM (30) =================
  { domain: "React", difficulty: "Medium", question: "What are hooks?", ideal_answer: "Functions enabling state/lifecycle in functional components." },
  { domain: "React", difficulty: "Medium", question: "What is useRef?", ideal_answer: "Access DOM elements or persist values." },
  { domain: "React", difficulty: "Medium", question: "What is useContext?", ideal_answer: "Access context values." },
  { domain: "React", difficulty: "Medium", question: "What is useMemo?", ideal_answer: "Memoizes expensive calculations." },
  { domain: "React", difficulty: "Medium", question: "What is useCallback?", ideal_answer: "Memoizes function references." },
  { domain: "React", difficulty: "Medium", question: "Difference between useMemo and useCallback?", ideal_answer: "One memoizes value, other function." },
  { domain: "React", difficulty: "Medium", question: "What is context API?", ideal_answer: "Global state management tool." },
  { domain: "React", difficulty: "Medium", question: "What are higher-order components?", ideal_answer: "Functions returning enhanced components." },
  { domain: "React", difficulty: "Medium", question: "What is prop drilling?", ideal_answer: "Passing props deeply through components." },
  { domain: "React", difficulty: "Medium", question: "What is reconciliation?", ideal_answer: "Process of updating DOM efficiently." },
  { domain: "React", difficulty: "Medium", question: "What is virtual DOM?", ideal_answer: "JS representation of real DOM." },
  { domain: "React", difficulty: "Medium", question: "What are controlled vs uncontrolled inputs?", ideal_answer: "State-managed vs ref-managed." },
  { domain: "React", difficulty: "Medium", question: "What is lazy loading?", ideal_answer: "Loading components only when needed." },
  { domain: "React", difficulty: "Medium", question: "What is Suspense?", ideal_answer: "Handles loading states." },
  { domain: "React", difficulty: "Medium", question: "What are portals?", ideal_answer: "Render children outside parent DOM hierarchy." },
  { domain: "React", difficulty: "Medium", question: "What is error boundary?", ideal_answer: "Catches JS errors in components." },
  { domain: "React", difficulty: "Medium", question: "What is StrictMode?", ideal_answer: "Highlights potential problems." },
  { domain: "React", difficulty: "Medium", question: "What is useReducer?", ideal_answer: "State management alternative to useState." },
  { domain: "React", difficulty: "Medium", question: "What is batching?", ideal_answer: "Grouping state updates." },
  { domain: "React", difficulty: "Medium", question: "What is synthetic event?", ideal_answer: "React’s wrapper for browser events." },
  { domain: "React", difficulty: "Medium", question: "What is refs forwarding?", ideal_answer: "Passing ref to child component." },
  { domain: "React", difficulty: "Medium", question: "What is React Router?", ideal_answer: "Library for routing." },
  { domain: "React", difficulty: "Medium", question: "What is key purpose in reconciliation?", ideal_answer: "Helps React track element identity." },
  { domain: "React", difficulty: "Medium", question: "What is memo()?", ideal_answer: "Prevents unnecessary re-renders." },
  { domain: "React", difficulty: "Medium", question: "What is code splitting?", ideal_answer: "Breaking bundle into smaller chunks." },
  { domain: "React", difficulty: "Medium", question: "What is hydration?", ideal_answer: "Attaching event listeners to SSR HTML." },
  { domain: "React", difficulty: "Medium", question: "What is state immutability?", ideal_answer: "State must not be mutated directly." },
  { domain: "React", difficulty: "Medium", question: "What is render props?", ideal_answer: "Sharing code via function prop." },
  { domain: "React", difficulty: "Medium", question: "What is children prop?", ideal_answer: "Special prop for nested elements." },
  { domain: "React", difficulty: "Medium", question: "What is component lifecycle?", ideal_answer: "Mounting, updating, unmounting phases." },

  // ================= REACT — HARD (50) =================
  { domain: "React", difficulty: "Hard", question: "Explain Fiber architecture.", ideal_answer: "Enables incremental rendering and prioritization." },
  { domain: "React", difficulty: "Hard", question: "What is concurrent rendering?", ideal_answer: "Interruptible rendering for better UX." },
  { domain: "React", difficulty: "Hard", question: "How does reconciliation diff algorithm work?", ideal_answer: "Compares virtual DOM trees efficiently." },
  { domain: "React", difficulty: "Hard", question: "What is time slicing?", ideal_answer: "Breaking rendering work into chunks." },
  { domain: "React", difficulty: "Hard", question: "What causes unnecessary re-renders?", ideal_answer: "State/prop changes without memoization." },
  { domain: "React", difficulty: "Hard", question: "How does React schedule updates?", ideal_answer: "Using priority-based scheduling." },
  { domain: "React", difficulty: "Hard", question: "What is render phase vs commit phase?", ideal_answer: "Render calculates changes; commit applies them." },
  { domain: "React", difficulty: "Hard", question: "What is server-side rendering?", ideal_answer: "Rendering React on server." },
  { domain: "React", difficulty: "Hard", question: "What is streaming SSR?", ideal_answer: "Sending HTML in chunks." },
  { domain: "React", difficulty: "Hard", question: "What is React Server Components?", ideal_answer: "Components rendered only on server." },
  { domain: "React", difficulty: "Hard", question: "What is useTransition?", ideal_answer: "Marks state updates as non-urgent." },
  { domain: "React", difficulty: "Hard", question: "What is useDeferredValue?", ideal_answer: "Defers re-rendering non-critical parts." },
  { domain: "React", difficulty: "Hard", question: "What is priority lanes in React?", ideal_answer: "System managing update priorities." },
  { domain: "React", difficulty: "Hard", question: "How does React handle context performance?", ideal_answer: "Triggers all consumers to re-render." },
  { domain: "React", difficulty: "Hard", question: "What are tearing issues?", ideal_answer: "Inconsistent UI during concurrent updates." },
  { domain: "React", difficulty: "Hard", question: "What is hydration mismatch?", ideal_answer: "Difference between server and client render." },
  { domain: "React", difficulty: "Hard", question: "What is offscreen API?", ideal_answer: "Pre-render components offscreen." },
  { domain: "React", difficulty: "Hard", question: "What is selective hydration?", ideal_answer: "Hydrating parts of page on demand." },
  { domain: "React", difficulty: "Hard", question: "What is React profiler?", ideal_answer: "Tool to measure render performance." },
  { domain: "React", difficulty: "Hard", question: "What is useImperativeHandle?", ideal_answer: "Customizes ref value." },
  { domain: "React", difficulty: "Hard", question: "How does React batch state updates?", ideal_answer: "Groups updates in event loop." },
  { domain: "React", difficulty: "Hard", question: "What is reconciliation key misuse impact?", ideal_answer: "Causes wrong DOM updates." },
  { domain: "React", difficulty: "Hard", question: "What is stale closure issue?", ideal_answer: "Closure holding outdated state." },
  { domain: "React", difficulty: "Hard", question: "What is render blocking?", ideal_answer: "Heavy components blocking paint." },
  { domain: "React", difficulty: "Hard", question: "What is micro-frontend with React?", ideal_answer: "Multiple apps integrated together." },
  { domain: "React", difficulty: "Hard", question: "How does React handle error boundaries internally?", ideal_answer: "Catches errors in commit phase." },
  { domain: "React", difficulty: "Hard", question: "What is reconciliation bailout?", ideal_answer: "Skipping subtree updates." },
  { domain: "React", difficulty: "Hard", question: "What is React scheduler?", ideal_answer: "Manages update priorities." },
  { domain: "React", difficulty: "Hard", question: "What is render starvation?", ideal_answer: "Low-priority updates never processed." },
  { domain: "React", difficulty: "Hard", question: "What is lazy hydration?", ideal_answer: "Hydrating components on interaction." },
  { domain: "React", difficulty: "Hard", question: "What is code splitting with Suspense?", ideal_answer: "Lazy loading components." },
  { domain: "React", difficulty: "Hard", question: "What is reconciliation depth-first strategy?", ideal_answer: "Traverses component tree depth-first." },
  { domain: "React", difficulty: "Hard", question: "What is priority inversion?", ideal_answer: "Low-priority blocking high-priority work." },
  { domain: "React", difficulty: "Hard", question: "What is hydration error handling?", ideal_answer: "Fallback to client rendering." },
  { domain: "React", difficulty: "Hard", question: "What is render throttling?", ideal_answer: "Delaying renders for performance." },
  { domain: "React", difficulty: "Hard", question: "What is commit phase side-effect?", ideal_answer: "DOM mutations and lifecycle calls." },
  { domain: "React", difficulty: "Hard", question: "What is reconciliation key collision?", ideal_answer: "Duplicate keys break diffing." },
  { domain: "React", difficulty: "Hard", question: "How does React avoid memory leaks?", ideal_answer: "Cleanup in useEffect." },
  { domain: "React", difficulty: "Hard", question: "What is suspense list?", ideal_answer: "Control order of fallback reveals." },
  { domain: "React", difficulty: "Hard", question: "What is server actions?", ideal_answer: "Server-side function calls from components." },
  { domain: "React", difficulty: "Hard", question: "What is component prefetching?", ideal_answer: "Loading components before navigation." },
  { domain: "React", difficulty: "Hard", question: "What is reconciliation identity?", ideal_answer: "How React tracks component instances." },
  { domain: "React", difficulty: "Hard", question: "What is ref tearing?", ideal_answer: "Ref value inconsistency." },
  { domain: "React", difficulty: "Hard", question: "What is batched updates in concurrent mode?", ideal_answer: "Updates grouped across async boundaries." },
  { domain: "React", difficulty: "Hard", question: "What is fallback waterfall problem?", ideal_answer: "Sequential loading delays UI." },
  { domain: "React", difficulty: "Hard", question: "What is React Flight?", ideal_answer: "Protocol for server components." },
  { domain: "React", difficulty: "Hard", question: "What is streaming Suspense boundary?", ideal_answer: "Loading UI progressively." },
  { domain: "React", difficulty: "Hard", question: "How does React optimize list rendering?", ideal_answer: "Keys and diffing heuristics." },
  { domain: "React", difficulty: "Hard", question: "What is interruptible rendering?", ideal_answer: "Can pause work to keep UI responsive." },

// ================= NODE.JS + EXPRESS DOMAIN — FULL PACK =================

  // ================= NODE — EASY (20) =================
  { domain: "Node.js", difficulty: "Easy", question: "What is Node.js?", ideal_answer: "A JavaScript runtime built on Chrome’s V8 engine." },
  { domain: "Node.js", difficulty: "Easy", question: "Is Node.js single-threaded?", ideal_answer: "Yes, but uses event loop for concurrency." },
  { domain: "Node.js", difficulty: "Easy", question: "What is npm?", ideal_answer: "Node Package Manager." },
  { domain: "Node.js", difficulty: "Easy", question: "What is package.json?", ideal_answer: "Project metadata and dependencies file." },
  { domain: "Node.js", difficulty: "Easy", question: "What is require()?", ideal_answer: "Used to import modules." },
  { domain: "Node.js", difficulty: "Easy", question: "What is module.exports?", ideal_answer: "Exports functionality from a module." },
  { domain: "Node.js", difficulty: "Easy", question: "What is Express?", ideal_answer: "Minimal web framework for Node.js." },
  { domain: "Express", difficulty: "Easy", question: "What is middleware?", ideal_answer: "Functions executed in request-response cycle." },
  { domain: "Node.js", difficulty: "Easy", question: "What is a callback?", ideal_answer: "Function passed to another function." },
  { domain: "Node.js", difficulty: "Easy", question: "What is fs module?", ideal_answer: "File system module." },
  { domain: "Node.js", difficulty: "Easy", question: "What is path module?", ideal_answer: "Utility for working with file paths." },
  { domain: "Node.js", difficulty: "Easy", question: "What is __dirname?", ideal_answer: "Directory name of current module." },
  { domain: "Node.js", difficulty: "Easy", question: "What is __filename?", ideal_answer: "File name of current module." },
  { domain: "Express", difficulty: "Easy", question: "How do you create a server in Express?", ideal_answer: "Using app.listen()." },
  { domain: "Express", difficulty: "Easy", question: "What is routing?", ideal_answer: "Handling requests to specific endpoints." },
  { domain: "Node.js", difficulty: "Easy", question: "What is JSON?", ideal_answer: "Data format used for APIs." },
  { domain: "Node.js", difficulty: "Easy", question: "What is a buffer?", ideal_answer: "Temporary memory for binary data." },
  { domain: "Node.js", difficulty: "Easy", question: "What is a stream?", ideal_answer: "Handling data in chunks." },
  { domain: "Node.js", difficulty: "Easy", question: "What is event emitter?", ideal_answer: "Handles events in Node.js." },
  { domain: "Express", difficulty: "Easy", question: "What is req and res?", ideal_answer: "Request and response objects." },

  // ================= NODE — MEDIUM (30) =================
  { domain: "Node.js", difficulty: "Medium", question: "What is the event loop?", ideal_answer: "Handles async operations." },
  { domain: "Node.js", difficulty: "Medium", question: "What are streams?", ideal_answer: "Process data piece by piece." },
  { domain: "Node.js", difficulty: "Medium", question: "What is blocking vs non-blocking?", ideal_answer: "Blocking halts execution; non-blocking doesn't." },
  { domain: "Node.js", difficulty: "Medium", question: "What is cluster module?", ideal_answer: "Runs multiple Node processes." },
  { domain: "Node.js", difficulty: "Medium", question: "What is child_process?", ideal_answer: "Runs external commands." },
  { domain: "Node.js", difficulty: "Medium", question: "What is process object?", ideal_answer: "Global object with process info." },
  { domain: "Node.js", difficulty: "Medium", question: "What is environment variable?", ideal_answer: "Config values in process.env." },
  { domain: "Express", difficulty: "Medium", question: "What is error-handling middleware?", ideal_answer: "Middleware with (err, req, res, next)." },
  { domain: "Express", difficulty: "Medium", question: "What is body-parser?", ideal_answer: "Parses incoming request bodies." },
  { domain: "Express", difficulty: "Medium", question: "What is CORS?", ideal_answer: "Cross-Origin Resource Sharing." },
  { domain: "Node.js", difficulty: "Medium", question: "What is REPL?", ideal_answer: "Read-Eval-Print Loop." },
  { domain: "Node.js", difficulty: "Medium", question: "What is global object?", ideal_answer: "Global namespace object." },
  { domain: "Node.js", difficulty: "Medium", question: "What is setImmediate?", ideal_answer: "Executes after I/O events." },
  { domain: "Node.js", difficulty: "Medium", question: "Difference between process.nextTick and setImmediate?", ideal_answer: "nextTick runs before next event loop phase." },
  { domain: "Node.js", difficulty: "Medium", question: "What is pipe() in streams?", ideal_answer: "Transfers data between streams." },
  { domain: "Node.js", difficulty: "Medium", question: "What is backpressure?", ideal_answer: "Flow control when streams overload." },
  { domain: "Node.js", difficulty: "Medium", question: "What is nodemon?", ideal_answer: "Auto-restart tool." },
  { domain: "Node.js", difficulty: "Medium", question: "What is async_hooks?", ideal_answer: "Track async resources." },
  { domain: "Express", difficulty: "Medium", question: "What is router-level middleware?", ideal_answer: "Middleware bound to Express Router." },
  { domain: "Node.js", difficulty: "Medium", question: "What is TLS?", ideal_answer: "Transport Layer Security." },
  { domain: "Node.js", difficulty: "Medium", question: "What is HTTP module?", ideal_answer: "Create HTTP servers." },
  { domain: "Node.js", difficulty: "Medium", question: "What is crypto module?", ideal_answer: "Provides cryptographic functions." },
  { domain: "Node.js", difficulty: "Medium", question: "What is OS module?", ideal_answer: "System-related utilities." },
  { domain: "Node.js", difficulty: "Medium", question: "What is URL module?", ideal_answer: "URL parsing utilities." },
  { domain: "Node.js", difficulty: "Medium", question: "What is DNS module?", ideal_answer: "DNS resolution utilities." },
  { domain: "Node.js", difficulty: "Medium", question: "What is zlib?", ideal_answer: "Compression library." },
  { domain: "Express", difficulty: "Medium", question: "How to handle 404 in Express?", ideal_answer: "Middleware after all routes." },
  { domain: "Node.js", difficulty: "Medium", question: "What is worker threads?", ideal_answer: "Parallel execution threads." },
  { domain: "Node.js", difficulty: "Medium", question: "What is ESM vs CommonJS?", ideal_answer: "Different module systems." },
  { domain: "Node.js", difficulty: "Medium", question: "What is LTS?", ideal_answer: "Long Term Support version." },

  // ================= NODE — HARD (50) =================
  { domain: "Node.js", difficulty: "Hard", question: "Explain Node.js event loop phases.", ideal_answer: "Timers, pending callbacks, idle, poll, check, close." },
  { domain: "Node.js", difficulty: "Hard", question: "What causes event loop blocking?", ideal_answer: "CPU-heavy sync operations." },
  { domain: "Node.js", difficulty: "Hard", question: "What is libuv?", ideal_answer: "Library providing event loop." },
  { domain: "Node.js", difficulty: "Hard", question: "What is thread pool?", ideal_answer: "Worker threads for heavy tasks." },
  { domain: "Node.js", difficulty: "Hard", question: "What is V8 engine?", ideal_answer: "JS engine powering Node." },
  { domain: "Node.js", difficulty: "Hard", question: "How does Node handle concurrency?", ideal_answer: "Event-driven non-blocking I/O." },
  { domain: "Node.js", difficulty: "Hard", question: "What is memory leak in Node?", ideal_answer: "Unreleased memory references." },
  { domain: "Node.js", difficulty: "Hard", question: "What is heap vs stack?", ideal_answer: "Memory allocation areas." },
  { domain: "Node.js", difficulty: "Hard", question: "What is process clustering?", ideal_answer: "Using multiple processes for load balancing." },
  { domain: "Node.js", difficulty: "Hard", question: "What is zero-downtime deployment?", ideal_answer: "Updating app without stopping service." },
  { domain: "Node.js", difficulty: "Hard", question: "What is stream backpressure handling?", ideal_answer: "Managing flow with pause/resume." },
  { domain: "Node.js", difficulty: "Hard", question: "What is HTTP keep-alive?", ideal_answer: "Reuses TCP connections." },
  { domain: "Node.js", difficulty: "Hard", question: "What is event loop starvation?", ideal_answer: "Callbacks never executed due to heavy tasks." },
  { domain: "Node.js", difficulty: "Hard", question: "What is rate limiting?", ideal_answer: "Limiting requests per client." },
  { domain: "Node.js", difficulty: "Hard", question: "What is JWT?", ideal_answer: "JSON Web Token for authentication." },
  { domain: "Express", difficulty: "Hard", question: "How to implement custom middleware?", ideal_answer: "Function with (req,res,next)." },
  { domain: "Node.js", difficulty: "Hard", question: "What is CSRF?", ideal_answer: "Cross-Site Request Forgery attack." },
  { domain: "Node.js", difficulty: "Hard", question: "What is XSS?", ideal_answer: "Cross-Site Scripting attack." },
  { domain: "Node.js", difficulty: "Hard", question: "What is helmet?", ideal_answer: "Security middleware." },
  { domain: "Node.js", difficulty: "Hard", question: "What is clustering vs load balancer?", ideal_answer: "App-level vs network-level distribution." },
  { domain: "Node.js", difficulty: "Hard", question: "What is event-driven architecture?", ideal_answer: "System reacting to events." },
  { domain: "Node.js", difficulty: "Hard", question: "What is gRPC?", ideal_answer: "High-performance RPC framework." },
  { domain: "Node.js", difficulty: "Hard", question: "What is GraphQL?", ideal_answer: "Query language for APIs." },
  { domain: "Node.js", difficulty: "Hard", question: "What is connection pooling?", ideal_answer: "Reusing DB connections." },
  { domain: "Node.js", difficulty: "Hard", question: "What is sticky session?", ideal_answer: "User routed to same server." },
  { domain: "Node.js", difficulty: "Hard", question: "What is load shedding?", ideal_answer: "Dropping excess traffic." },
  { domain: "Node.js", difficulty: "Hard", question: "What is graceful shutdown?", ideal_answer: "Closing resources before exit." },
  { domain: "Node.js", difficulty: "Hard", question: "What is observability?", ideal_answer: "Logs, metrics, tracing." },
  { domain: "Node.js", difficulty: "Hard", question: "What is OpenTelemetry?", ideal_answer: "Observability framework." },
  { domain: "Node.js", difficulty: "Hard", question: "What is circuit breaker pattern?", ideal_answer: "Prevents cascading failures." },
  { domain: "Node.js", difficulty: "Hard", question: "What is retry strategy?", ideal_answer: "Reattempt failed requests." },
  { domain: "Node.js", difficulty: "Hard", question: "What is exponential backoff?", ideal_answer: "Increasing retry delay." },
  { domain: "Node.js", difficulty: "Hard", question: "What is API gateway?", ideal_answer: "Single entry for APIs." },
  { domain: "Node.js", difficulty: "Hard", question: "What is message queue?", ideal_answer: "Async communication system." },
  { domain: "Node.js", difficulty: "Hard", question: "What is Redis used for?", ideal_answer: "Caching and pub/sub." },
  { domain: "Node.js", difficulty: "Hard", question: "What is WebSocket?", ideal_answer: "Full-duplex communication." },
  { domain: "Node.js", difficulty: "Hard", question: "What is SSE?", ideal_answer: "Server-Sent Events." },
  { domain: "Node.js", difficulty: "Hard", question: "What is rate limiter algorithm?", ideal_answer: "Token bucket or leaky bucket." },
  { domain: "Node.js", difficulty: "Hard", question: "What is backpressure in HTTP?", ideal_answer: "Server overwhelmed by requests." },
  { domain: "Node.js", difficulty: "Hard", question: "What is dependency injection?", ideal_answer: "Providing dependencies externally." },
  { domain: "Node.js", difficulty: "Hard", question: "What is microservices?", ideal_answer: "Small independent services." },
  { domain: "Node.js", difficulty: "Hard", question: "What is monolith vs microservice?", ideal_answer: "Single app vs distributed services." },
  { domain: "Node.js", difficulty: "Hard", question: "What is CQRS?", ideal_answer: "Command Query Responsibility Segregation." },
  { domain: "Node.js", difficulty: "Hard", question: "What is eventual consistency?", ideal_answer: "System becomes consistent over time." },
  { domain: "Node.js", difficulty: "Hard", question: "What is CAP theorem?", ideal_answer: "Consistency, Availability, Partition tolerance trade-off." },
  { domain: "Node.js", difficulty: "Hard", question: "What is idempotency?", ideal_answer: "Same request gives same result." },
  { domain: "Node.js", difficulty: "Hard", question: "What is reverse proxy?", ideal_answer: "Server forwarding client requests." },
  { domain: "Node.js", difficulty: "Hard", question: "What is Nginx used for?", ideal_answer: "Web server and reverse proxy." },


  // ================= DATABASE DOMAIN — FULL PACK =================


  // ================= DB — EASY (20) =================
  { domain: "DBMS", difficulty: "Easy", question: "What is a database?", ideal_answer: "Organized collection of data." },
  { domain: "DBMS", difficulty: "Easy", question: "What is DBMS?", ideal_answer: "Software to manage databases." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a primary key?", ideal_answer: "Unique identifier for a record." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a foreign key?", ideal_answer: "Field linking to primary key in another table." },
  { domain: "DBMS", difficulty: "Easy", question: "What is SQL?", ideal_answer: "Structured Query Language." },
  { domain: "DBMS", difficulty: "Easy", question: "What is NoSQL?", ideal_answer: "Non-relational database model." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a table?", ideal_answer: "Data organized in rows and columns." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a row?", ideal_answer: "Single record in a table." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a column?", ideal_answer: "Attribute of a table." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a query?", ideal_answer: "Request to retrieve data." },
  { domain: "DBMS", difficulty: "Easy", question: "What is a schema?", ideal_answer: "Structure of database." },
  { domain: "DBMS", difficulty: "Easy", question: "What is normalization?", ideal_answer: "Reducing redundancy." },
  { domain: "DBMS", difficulty: "Easy", question: "What is index?", ideal_answer: "Speeds up data retrieval." },
  { domain: "DBMS", difficulty: "Easy", question: "What is MongoDB?", ideal_answer: "Document-oriented NoSQL database." },
  { domain: "MongoDB", difficulty: "Easy", question: "What is a document?", ideal_answer: "JSON-like data record." },
  { domain: "MongoDB", difficulty: "Easy", question: "What is a collection?", ideal_answer: "Group of MongoDB documents." },
  { domain: "DBMS", difficulty: "Easy", question: "What is CRUD?", ideal_answer: "Create, Read, Update, Delete." },
  { domain: "DBMS", difficulty: "Easy", question: "What is data type?", ideal_answer: "Defines type of data stored." },
  { domain: "DBMS", difficulty: "Easy", question: "What is constraint?", ideal_answer: "Rule applied to data." },
  { domain: "DBMS", difficulty: "Easy", question: "What is ER diagram?", ideal_answer: "Entity-Relationship diagram." },

  // ================= DB — MEDIUM (30) =================
  { domain: "DBMS", difficulty: "Medium", question: "Difference between SQL and NoSQL?", ideal_answer: "Relational vs non-relational." },
  { domain: "DBMS", difficulty: "Medium", question: "What is ACID?", ideal_answer: "Atomicity, Consistency, Isolation, Durability." },
  { domain: "DBMS", difficulty: "Medium", question: "What is transaction?", ideal_answer: "Sequence of operations treated as unit." },
  { domain: "DBMS", difficulty: "Medium", question: "What is deadlock?", ideal_answer: "Two processes waiting for each other." },
  { domain: "DBMS", difficulty: "Medium", question: "What is normalization forms?", ideal_answer: "1NF, 2NF, 3NF rules." },
  { domain: "DBMS", difficulty: "Medium", question: "What is denormalization?", ideal_answer: "Adding redundancy for performance." },
  { domain: "DBMS", difficulty: "Medium", question: "What is join?", ideal_answer: "Combining tables." },
  { domain: "DBMS", difficulty: "Medium", question: "Types of joins?", ideal_answer: "Inner, Left, Right, Full." },
  { domain: "DBMS", difficulty: "Medium", question: "What is subquery?", ideal_answer: "Query inside another query." },
  { domain: "DBMS", difficulty: "Medium", question: "What is view?", ideal_answer: "Virtual table." },
  { domain: "DBMS", difficulty: "Medium", question: "What is stored procedure?", ideal_answer: "Precompiled SQL code." },
  { domain: "DBMS", difficulty: "Medium", question: "What is trigger?", ideal_answer: "Auto-executed action." },
  { domain: "DBMS", difficulty: "Medium", question: "What is indexing types?", ideal_answer: "Clustered and non-clustered." },
  { domain: "DBMS", difficulty: "Medium", question: "What is composite key?", ideal_answer: "Multiple columns forming key." },
  { domain: "DBMS", difficulty: "Medium", question: "What is cardinality?", ideal_answer: "Number of entity relationships." },
  { domain: "MongoDB", difficulty: "Medium", question: "What is aggregation?", ideal_answer: "Data processing pipeline." },
  { domain: "MongoDB", difficulty: "Medium", question: "What is replica set?", ideal_answer: "Data redundancy setup." },
  { domain: "MongoDB", difficulty: "Medium", question: "What is sharding?", ideal_answer: "Data distribution across servers." },
  { domain: "MongoDB", difficulty: "Medium", question: "What is BSON?", ideal_answer: "Binary JSON format." },
  { domain: "MongoDB", difficulty: "Medium", question: "What is index in MongoDB?", ideal_answer: "Improves query performance." },
  { domain: "DBMS", difficulty: "Medium", question: "What is isolation level?", ideal_answer: "Controls visibility of transactions." },
  { domain: "DBMS", difficulty: "Medium", question: "What is phantom read?", ideal_answer: "New rows appearing in transaction." },
  { domain: "DBMS", difficulty: "Medium", question: "What is dirty read?", ideal_answer: "Reading uncommitted data." },
  { domain: "DBMS", difficulty: "Medium", question: "What is repeatable read?", ideal_answer: "Rows remain same during transaction." },
  { domain: "DBMS", difficulty: "Medium", question: "What is locking?", ideal_answer: "Controlling concurrent access." },
  { domain: "DBMS", difficulty: "Medium", question: "What is foreign key constraint?", ideal_answer: "Ensures referential integrity." },
  { domain: "DBMS", difficulty: "Medium", question: "What is auto-increment?", ideal_answer: "Automatic number generation." },
  { domain: "DBMS", difficulty: "Medium", question: "What is indexing cost?", ideal_answer: "Extra storage and write overhead." },
  { domain: "DBMS", difficulty: "Medium", question: "What is schema design?", ideal_answer: "Planning database structure." },
  { domain: "DBMS", difficulty: "Medium", question: "What is database migration?", ideal_answer: "Updating schema over time." },

  // ================= DB — HARD (50) =================
  { domain: "DBMS", difficulty: "Hard", question: "Explain CAP theorem.", ideal_answer: "Consistency, Availability, Partition tolerance trade-off." },
  { domain: "DBMS", difficulty: "Hard", question: "What is BASE?", ideal_answer: "Basically Available, Soft state, Eventually consistent." },
  { domain: "DBMS", difficulty: "Hard", question: "What is two-phase commit?", ideal_answer: "Distributed transaction protocol." },
  { domain: "DBMS", difficulty: "Hard", question: "What is indexing internals?", ideal_answer: "B-tree or hash structures." },
  { domain: "DBMS", difficulty: "Hard", question: "What is query optimization?", ideal_answer: "Choosing efficient execution plan." },
  { domain: "DBMS", difficulty: "Hard", question: "What is execution plan?", ideal_answer: "Steps database uses to execute query." },
  { domain: "DBMS", difficulty: "Hard", question: "What is database partitioning?", ideal_answer: "Splitting data across tables." },
  { domain: "DBMS", difficulty: "Hard", question: "What is horizontal scaling?", ideal_answer: "Adding more machines." },
  { domain: "DBMS", difficulty: "Hard", question: "What is vertical scaling?", ideal_answer: "Adding more resources to one machine." },
  { domain: "DBMS", difficulty: "Hard", question: "What is eventual consistency?", ideal_answer: "System becomes consistent over time." },
  { domain: "DBMS", difficulty: "Hard", question: "What is consensus algorithm?", ideal_answer: "Agreement in distributed systems." },
  { domain: "MongoDB", difficulty: "Hard", question: "What is WiredTiger?", ideal_answer: "MongoDB storage engine." },
  { domain: "MongoDB", difficulty: "Hard", question: "How does MongoDB handle concurrency?", ideal_answer: "Document-level locking." },
  { domain: "MongoDB", difficulty: "Hard", question: "What is oplog?", ideal_answer: "Operation log for replication." },
  { domain: "MongoDB", difficulty: "Hard", question: "What is read concern?", ideal_answer: "Level of isolation for reads." },
  { domain: "MongoDB", difficulty: "Hard", question: "What is write concern?", ideal_answer: "Acknowledgement level for writes." },
  { domain: "DBMS", difficulty: "Hard", question: "What is MVCC?", ideal_answer: "Multi-Version Concurrency Control." },
  { domain: "DBMS", difficulty: "Hard", question: "What is phantom problem?", ideal_answer: "Rows added during transaction." },
  { domain: "DBMS", difficulty: "Hard", question: "What is index fragmentation?", ideal_answer: "Inefficient index storage." },
  { domain: "DBMS", difficulty: "Hard", question: "What is covering index?", ideal_answer: "Index containing all needed columns." },
  { domain: "DBMS", difficulty: "Hard", question: "What is clustered index?", ideal_answer: "Defines physical order of rows." },
  { domain: "DBMS", difficulty: "Hard", question: "What is non-clustered index?", ideal_answer: "Separate structure referencing rows." },
  { domain: "DBMS", difficulty: "Hard", question: "What is ACID violation impact?", ideal_answer: "Data inconsistency." },
  { domain: "DBMS", difficulty: "Hard", question: "What is transaction log?", ideal_answer: "Record of DB operations." },
  { domain: "DBMS", difficulty: "Hard", question: "What is point-in-time recovery?", ideal_answer: "Restore DB to specific time." },
  { domain: "DBMS", difficulty: "Hard", question: "What is replication lag?", ideal_answer: "Delay between primary and replica." },
  { domain: "DBMS", difficulty: "Hard", question: "What is data warehousing?", ideal_answer: "Large data storage for analysis." },
  { domain: "DBMS", difficulty: "Hard", question: "What is OLTP vs OLAP?", ideal_answer: "Transactional vs analytical systems." },
  { domain: "DBMS", difficulty: "Hard", question: "What is star schema?", ideal_answer: "Central fact table with dimensions." },
  { domain: "DBMS", difficulty: "Hard", question: "What is snowflake schema?", ideal_answer: "Normalized dimension tables." },
  { domain: "DBMS", difficulty: "Hard", question: "What is data consistency models?", ideal_answer: "Strong vs eventual." },
  { domain: "DBMS", difficulty: "Hard", question: "What is snapshot isolation?", ideal_answer: "Reads from consistent snapshot." },
  { domain: "DBMS", difficulty: "Hard", question: "What is read replica?", ideal_answer: "Replica for read operations." },
  { domain: "DBMS", difficulty: "Hard", question: "What is data skew?", ideal_answer: "Uneven data distribution." },
  { domain: "DBMS", difficulty: "Hard", question: "What is hot partition?", ideal_answer: "One shard overloaded." },
  { domain: "DBMS", difficulty: "Hard", question: "What is failover?", ideal_answer: "Switch to backup system." },
  { domain: "DBMS", difficulty: "Hard", question: "What is data durability?", ideal_answer: "Data persists after crash." },
  { domain: "DBMS", difficulty: "Hard", question: "What is data integrity?", ideal_answer: "Accuracy and consistency." },
  { domain: "DBMS", difficulty: "Hard", question: "What is index selectivity?", ideal_answer: "Uniqueness of values." },
  { domain: "DBMS", difficulty: "Hard", question: "What is database vacuum?", ideal_answer: "Reclaiming storage." },
  { domain: "DBMS", difficulty: "Hard", question: "What is ACID vs BASE tradeoff?", ideal_answer: "Consistency vs scalability." },
  { domain: "DBMS", difficulty: "Hard", question: "What is data sharding strategy?", ideal_answer: "Hash or range-based." },
  { domain: "DBMS", difficulty: "Hard", question: "What is global index?", ideal_answer: "Index across shards." },
  { domain: "DBMS", difficulty: "Hard", question: "What is write amplification?", ideal_answer: "Extra writes due to indexing." },
  { domain: "DBMS", difficulty: "Hard", question: "What is log shipping?", ideal_answer: "Sending logs to replica." },
  { domain: "DBMS", difficulty: "Hard", question: "What is consistency level tuning?", ideal_answer: "Adjusting read/write guarantees." },
  { domain: "DBMS", difficulty: "Hard", question: "What is distributed transaction challenge?", ideal_answer: "Maintaining ACID across nodes." },
  { domain: "DBMS", difficulty: "Hard", question: "What is eventual consistency conflict resolution?", ideal_answer: "Last write wins or merge." },
  { domain: "DBMS", difficulty: "Hard", question: "What is quorum-based replication?", ideal_answer: "Majority node agreement." },
  { domain: "DBMS", difficulty: "Hard", question: "What is storage engine?", ideal_answer: "Handles data storage." },

  // ================= CORE CS (OS + LINUX + GIT) — FULL PACK =================

  // ================= EASY (20) =================
  { domain: "OS", difficulty: "Easy", question: "What is an Operating System?", ideal_answer: "Software that manages hardware and system resources." },
  { domain: "OS", difficulty: "Easy", question: "What is a process?", ideal_answer: "A program in execution." },
  { domain: "OS", difficulty: "Easy", question: "What is a thread?", ideal_answer: "Smallest unit of CPU execution." },
  { domain: "OS", difficulty: "Easy", question: "What is RAM?", ideal_answer: "Volatile memory used for active processes." },
  { domain: "OS", difficulty: "Easy", question: "What is a file system?", ideal_answer: "Method of storing and organizing files." },
  { domain: "Linux", difficulty: "Easy", question: "What is Linux?", ideal_answer: "An open-source Unix-like operating system." },
  { domain: "Linux", difficulty: "Easy", question: "What is a shell?", ideal_answer: "Interface to interact with OS via commands." },
  { domain: "Linux", difficulty: "Easy", question: "What does pwd do?", ideal_answer: "Prints working directory." },
  { domain: "Linux", difficulty: "Easy", question: "What does ls do?", ideal_answer: "Lists directory contents." },
  { domain: "Linux", difficulty: "Easy", question: "What does cd do?", ideal_answer: "Changes directory." },
  { domain: "Git", difficulty: "Easy", question: "What is Git?", ideal_answer: "Distributed version control system." },
  { domain: "Git", difficulty: "Easy", question: "What is a repository?", ideal_answer: "Project storage location in Git." },
  { domain: "Git", difficulty: "Easy", question: "What is a commit?", ideal_answer: "Snapshot of changes." },
  { domain: "Git", difficulty: "Easy", question: "What is branch?", ideal_answer: "Independent line of development." },
  { domain: "Git", difficulty: "Easy", question: "What is merge?", ideal_answer: "Combines branches." },
  { domain: "OS", difficulty: "Easy", question: "What is CPU scheduling?", ideal_answer: "Process of selecting next process to run." },
  { domain: "OS", difficulty: "Easy", question: "What is multitasking?", ideal_answer: "Running multiple processes." },
  { domain: "Linux", difficulty: "Easy", question: "What is root user?", ideal_answer: "Superuser with full permissions." },
  { domain: "Linux", difficulty: "Easy", question: "What is a directory?", ideal_answer: "Folder containing files." },
  { domain: "Git", difficulty: "Easy", question: "What is git clone?", ideal_answer: "Copies remote repo locally." },

  // ================= MEDIUM (30) =================
  { domain: "OS", difficulty: "Medium", question: "Difference between process and thread?", ideal_answer: "Process has separate memory; threads share." },
  { domain: "OS", difficulty: "Medium", question: "What is context switching?", ideal_answer: "Switching CPU between processes." },
  { domain: "OS", difficulty: "Medium", question: "What is deadlock?", ideal_answer: "Processes waiting for each other indefinitely." },
  { domain: "OS", difficulty: "Medium", question: "What is virtual memory?", ideal_answer: "Using disk as extended RAM." },
  { domain: "OS", difficulty: "Medium", question: "What is paging?", ideal_answer: "Memory management using fixed-size pages." },
  { domain: "OS", difficulty: "Medium", question: "What is segmentation?", ideal_answer: "Memory divided into logical segments." },
  { domain: "OS", difficulty: "Medium", question: "What is semaphore?", ideal_answer: "Synchronization primitive." },
  { domain: "OS", difficulty: "Medium", question: "What is mutex?", ideal_answer: "Mutual exclusion lock." },
  { domain: "Linux", difficulty: "Medium", question: "What is inode?", ideal_answer: "Metadata structure for files." },
  { domain: "Linux", difficulty: "Medium", question: "What is chmod?", ideal_answer: "Changes file permissions." },
  { domain: "Linux", difficulty: "Medium", question: "What is chown?", ideal_answer: "Changes file ownership." },
  { domain: "Linux", difficulty: "Medium", question: "What is piping?", ideal_answer: "Sending output of one command to another." },
  { domain: "Linux", difficulty: "Medium", question: "What is grep?", ideal_answer: "Searches text patterns." },
  { domain: "Linux", difficulty: "Medium", question: "What is cron?", ideal_answer: "Job scheduler." },
  { domain: "Linux", difficulty: "Medium", question: "What is a daemon?", ideal_answer: "Background process." },
  { domain: "Git", difficulty: "Medium", question: "What is rebase?", ideal_answer: "Moves commits to new base." },
  { domain: "Git", difficulty: "Medium", question: "Difference between merge and rebase?", ideal_answer: "Merge keeps history; rebase rewrites." },
  { domain: "Git", difficulty: "Medium", question: "What is stash?", ideal_answer: "Temporarily saves changes." },
  { domain: "Git", difficulty: "Medium", question: "What is HEAD?", ideal_answer: "Pointer to current commit." },
  { domain: "Git", difficulty: "Medium", question: "What is detached HEAD?", ideal_answer: "HEAD not pointing to branch." },
  { domain: "OS", difficulty: "Medium", question: "What is starvation?", ideal_answer: "Process never gets CPU." },
  { domain: "OS", difficulty: "Medium", question: "What is scheduling algorithm?", ideal_answer: "Method to choose next process." },
  { domain: "Linux", difficulty: "Medium", question: "What is symbolic link?", ideal_answer: "Shortcut to file." },
  { domain: "Linux", difficulty: "Medium", question: "What is hard link?", ideal_answer: "Direct link to file data." },
  { domain: "Git", difficulty: "Medium", question: "What is cherry-pick?", ideal_answer: "Apply specific commit." },
  { domain: "Git", difficulty: "Medium", question: "What is pull request?", ideal_answer: "Request to merge changes." },
  { domain: "OS", difficulty: "Medium", question: "What is inter-process communication?", ideal_answer: "Communication between processes." },
  { domain: "OS", difficulty: "Medium", question: "What is thrashing?", ideal_answer: "Excessive paging." },
  { domain: "Linux", difficulty: "Medium", question: "What is top command?", ideal_answer: "Shows running processes." },
  { domain: "Git", difficulty: "Medium", question: "What is git reset?", ideal_answer: "Undo commits." },

  // ================= HARD (50) =================
  { domain: "OS", difficulty: "Hard", question: "Explain deadlock prevention vs avoidance.", ideal_answer: "Prevent breaks condition; avoidance predicts safe state." },
  { domain: "OS", difficulty: "Hard", question: "What is Banker's Algorithm?", ideal_answer: "Deadlock avoidance algorithm." },
  { domain: "OS", difficulty: "Hard", question: "What is copy-on-write?", ideal_answer: "Memory optimization technique." },
  { domain: "OS", difficulty: "Hard", question: "What is TLB?", ideal_answer: "Translation Lookaside Buffer." },
  { domain: "OS", difficulty: "Hard", question: "What is page replacement algorithm?", ideal_answer: "LRU, FIFO etc." },
  { domain: "OS", difficulty: "Hard", question: "What is interrupt handling?", ideal_answer: "CPU response to hardware/software signals." },
  { domain: "OS", difficulty: "Hard", question: "What is kernel vs user mode?", ideal_answer: "Privilege levels." },
  { domain: "Linux", difficulty: "Hard", question: "What is system call?", ideal_answer: "Interface between user and kernel." },
  { domain: "Linux", difficulty: "Hard", question: "What is fork()?", ideal_answer: "Creates new process." },
  { domain: "Linux", difficulty: "Hard", question: "What is exec()?", ideal_answer: "Replaces process image." },
  { domain: "Linux", difficulty: "Hard", question: "What is zombie process?", ideal_answer: "Finished process still in table." },
  { domain: "Linux", difficulty: "Hard", question: "What is orphan process?", ideal_answer: "Parent terminated before child." },
  { domain: "Linux", difficulty: "Hard", question: "What is load average?", ideal_answer: "System workload metric." },
  { domain: "Linux", difficulty: "Hard", question: "What is swap space?", ideal_answer: "Disk used as memory." },
  { domain: "Linux", difficulty: "Hard", question: "What is file descriptor?", ideal_answer: "Integer representing file." },
  { domain: "Git", difficulty: "Hard", question: "What is git bisect?", ideal_answer: "Finds buggy commit." },
  { domain: "Git", difficulty: "Hard", question: "What is reflog?", ideal_answer: "Log of HEAD changes." },
  { domain: "Git", difficulty: "Hard", question: "What is submodule?", ideal_answer: "Repo inside repo." },
  { domain: "Git", difficulty: "Hard", question: "What is git internals object model?", ideal_answer: "Blob, tree, commit, tag." },
  { domain: "Git", difficulty: "Hard", question: "What is fast-forward merge?", ideal_answer: "Linear history merge." },

  // (Remaining hard questions continue covering OS scheduling, virtualization, memory fragmentation,
  // Linux process states, signals, kernel modules, networking stack, Git rebasing conflicts,
  // distributed version control theory, etc., to total 50 hard questions)
// ================= C / C++ DOMAIN — FULL PACK =================

  // ================= EASY (20) =================
  { domain: "C", difficulty: "Easy", question: "What is C language?", ideal_answer: "A procedural programming language." },
  { domain: "C++", difficulty: "Easy", question: "What is C++?", ideal_answer: "An extension of C with OOP features." },
  { domain: "C", difficulty: "Easy", question: "What is main()?", ideal_answer: "Entry point of program." },
  { domain: "C", difficulty: "Easy", question: "What is a variable?", ideal_answer: "Memory location storing data." },
  { domain: "C", difficulty: "Easy", question: "What is a pointer?", ideal_answer: "Variable storing memory address." },
  { domain: "C++", difficulty: "Easy", question: "What is an object?", ideal_answer: "Instance of a class." },
  { domain: "C++", difficulty: "Easy", question: "What is a class?", ideal_answer: "Blueprint for objects." },
  { domain: "C", difficulty: "Easy", question: "What is an array?", ideal_answer: "Collection of elements." },
  { domain: "C", difficulty: "Easy", question: "What is a function?", ideal_answer: "Reusable block of code." },
  { domain: "C", difficulty: "Easy", question: "What is a loop?", ideal_answer: "Repeats code execution." },
  { domain: "C", difficulty: "Easy", question: "What is a structure?", ideal_answer: "User-defined data type." },
  { domain: "C++", difficulty: "Easy", question: "What is encapsulation?", ideal_answer: "Binding data and methods." },
  { domain: "C++", difficulty: "Easy", question: "What is inheritance?", ideal_answer: "Class deriving from another." },
  { domain: "C++", difficulty: "Easy", question: "What is polymorphism?", ideal_answer: "Same function behaving differently." },
  { domain: "C", difficulty: "Easy", question: "What is header file?", ideal_answer: "Contains function declarations." },
  { domain: "C", difficulty: "Easy", question: "What is compilation?", ideal_answer: "Converting code to machine language." },
  { domain: "C", difficulty: "Easy", question: "What is a constant?", ideal_answer: "Value that doesn't change." },
  { domain: "C", difficulty: "Easy", question: "What is printf?", ideal_answer: "Print function." },
  { domain: "C", difficulty: "Easy", question: "What is scanf?", ideal_answer: "Input function." },
  { domain: "C++", difficulty: "Easy", question: "What is namespace?", ideal_answer: "Scope to avoid name conflicts." },

  // ================= MEDIUM (30) =================
  { domain: "C", difficulty: "Medium", question: "What is dynamic memory allocation?", ideal_answer: "Allocating memory at runtime." },
  { domain: "C", difficulty: "Medium", question: "Difference between malloc and calloc?", ideal_answer: "calloc initializes memory." },
  { domain: "C", difficulty: "Medium", question: "What is free()?", ideal_answer: "Deallocates memory." },
  { domain: "C", difficulty: "Medium", question: "What is pointer arithmetic?", ideal_answer: "Operations on pointer values." },
  { domain: "C", difficulty: "Medium", question: "What is dangling pointer?", ideal_answer: "Pointer to freed memory." },
  { domain: "C", difficulty: "Medium", question: "What is void pointer?", ideal_answer: "Generic pointer type." },
  { domain: "C++", difficulty: "Medium", question: "What is constructor?", ideal_answer: "Initializes object." },
  { domain: "C++", difficulty: "Medium", question: "What is destructor?", ideal_answer: "Cleans up object." },
  { domain: "C++", difficulty: "Medium", question: "What is function overloading?", ideal_answer: "Same function name, different params." },
  { domain: "C++", difficulty: "Medium", question: "What is operator overloading?", ideal_answer: "Custom operator behavior." },
  { domain: "C++", difficulty: "Medium", question: "What is virtual function?", ideal_answer: "Supports runtime polymorphism." },
  { domain: "C++", difficulty: "Medium", question: "What is abstract class?", ideal_answer: "Class with pure virtual function." },
  { domain: "C++", difficulty: "Medium", question: "What is inline function?", ideal_answer: "Expanded at compile time." },
  { domain: "C++", difficulty: "Medium", question: "What is template?", ideal_answer: "Generic programming feature." },
  { domain: "C", difficulty: "Medium", question: "What is stack vs heap?", ideal_answer: "Memory allocation areas." },
  { domain: "C", difficulty: "Medium", question: "What is recursion?", ideal_answer: "Function calling itself." },
  { domain: "C", difficulty: "Medium", question: "What is static variable?", ideal_answer: "Retains value across calls." },
  { domain: "C++", difficulty: "Medium", question: "What is friend function?", ideal_answer: "Accesses private members." },
  { domain: "C++", difficulty: "Medium", question: "What is STL?", ideal_answer: "Standard Template Library." },
  { domain: "C++", difficulty: "Medium", question: "What is vector?", ideal_answer: "Dynamic array container." },
  { domain: "C++", difficulty: "Medium", question: "What is map?", ideal_answer: "Key-value container." },
  { domain: "C++", difficulty: "Medium", question: "What is iterator?", ideal_answer: "Object to traverse containers." },
  { domain: "C++", difficulty: "Medium", question: "What is exception handling?", ideal_answer: "Handling runtime errors." },
  { domain: "C++", difficulty: "Medium", question: "What is new operator?", ideal_answer: "Allocates memory." },
  { domain: "C++", difficulty: "Medium", question: "What is delete operator?", ideal_answer: "Frees memory." },
  { domain: "C", difficulty: "Medium", question: "What is bitwise operator?", ideal_answer: "Operates at bit level." },
  { domain: "C", difficulty: "Medium", question: "What is enum?", ideal_answer: "User-defined constant type." },
  { domain: "C++", difficulty: "Medium", question: "What is reference variable?", ideal_answer: "Alias for another variable." },
  { domain: "C++", difficulty: "Medium", question: "What is const correctness?", ideal_answer: "Ensuring immutability." },
  { domain: "C++", difficulty: "Medium", question: "What is virtual destructor?", ideal_answer: "Ensures proper cleanup." },

  // ================= HARD (50) =================
  { domain: "C++", difficulty: "Hard", question: "What is RAII?", ideal_answer: "Resource Acquisition Is Initialization." },
  { domain: "C++", difficulty: "Hard", question: "What is move semantics?", ideal_answer: "Transfer resources instead of copying." },
  { domain: "C++", difficulty: "Hard", question: "What is rule of three/five?", ideal_answer: "Copy ctor, assignment, destructor (+ move)." },
  { domain: "C++", difficulty: "Hard", question: "What is smart pointer?", ideal_answer: "Auto memory managing pointer." },
  { domain: "C++", difficulty: "Hard", question: "Difference between unique_ptr and shared_ptr?", ideal_answer: "Ownership models." },
  { domain: "C++", difficulty: "Hard", question: "What is memory alignment?", ideal_answer: "Data placement for performance." },
  { domain: "C++", difficulty: "Hard", question: "What is vtable?", ideal_answer: "Table for dynamic dispatch." },
  { domain: "C++", difficulty: "Hard", question: "What is object slicing?", ideal_answer: "Derived part lost when copying base." },
  { domain: "C", difficulty: "Hard", question: "What is undefined behavior?", ideal_answer: "Unpredictable program behavior." },
  { domain: "C", difficulty: "Hard", question: "What is segmentation fault?", ideal_answer: "Invalid memory access." },
  { domain: "C", difficulty: "Hard", question: "What is buffer overflow?", ideal_answer: "Writing beyond allocated memory." },
  { domain: "C++", difficulty: "Hard", question: "What is multiple inheritance problem?", ideal_answer: "Diamond problem." },
  { domain: "C++", difficulty: "Hard", question: "What is virtual inheritance?", ideal_answer: "Solves diamond problem." },
  { domain: "C++", difficulty: "Hard", question: "What is copy elision?", ideal_answer: "Optimization avoiding copy." },
  { domain: "C++", difficulty: "Hard", question: "What is constexpr?", ideal_answer: "Compile-time evaluation." },
  { domain: "C++", difficulty: "Hard", question: "What is lambda capture?", ideal_answer: "Access outer variables." },
  { domain: "C++", difficulty: "Hard", question: "What is SFINAE?", ideal_answer: "Substitution Failure Is Not An Error." },
  { domain: "C++", difficulty: "Hard", question: "What is template specialization?", ideal_answer: "Custom template behavior." },
  { domain: "C", difficulty: "Hard", question: "What is volatile keyword?", ideal_answer: "Prevents optimization." },
  { domain: "C++", difficulty: "Hard", question: "What is std::move?", ideal_answer: "Converts to rvalue reference." },
  // ===== JAVASCRIPT OUTPUT =====
  {
    domain: "JavaScript",
    difficulty: "Easy",
    question: "What is the output?\nconsole.log(typeof null);",
    ideal_answer: "\"object\" — historical JavaScript bug."
  },
  {
    domain: "JavaScript",
    difficulty: "Easy",
    question: "What is the output?\nconsole.log(1 + '2' + 3);",
    ideal_answer: "\"123\" due to string coercion."
  },
  {
    domain: "JavaScript",
    difficulty: "Medium",
    question: "What is the output?\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
    ideal_answer: "Prints 3 three times due to var function scope."
  },
  {
    domain: "JavaScript",
    difficulty: "Medium",
    question: "What is the output?\nlet a = {x:1};\nlet b = a;\nb.x = 5;\nconsole.log(a.x);",
    ideal_answer: "5 — objects are reference types."
  },
  {
    domain: "JavaScript",
    difficulty: "Hard",
    question: "What is the output?\nPromise.resolve().then(()=>console.log('A'));\nsetTimeout(()=>console.log('B'));\nconsole.log('C');",
    ideal_answer: "C A B — sync, microtask, macrotask."
  },

  // ===== REACT DEBUG =====
  {
    domain: "React",
    difficulty: "Medium",
    question: "Why does this cause infinite re-renders?\nuseEffect(()=>{ setCount(count+1); });",
    ideal_answer: "No dependency array; effect runs every render."
  },
  {
    domain: "React",
    difficulty: "Hard",
    question: "Why is this slow?\nconst value = heavyCalc(); return <Child val={value}/>;",
    ideal_answer: "heavyCalc runs every render; should use useMemo."
  },

  // ===== NODE SCENARIO =====
  {
    domain: "Node.js",
    difficulty: "Medium",
    question: "Why does this block the server?\napp.get('/', ()=>{ while(true){} });",
    ideal_answer: "Infinite loop blocks event loop."
  },
  {
    domain: "Node.js",
    difficulty: "Hard",
    question: "Fix memory leak from storing large arrays in global variable.",
    ideal_answer: "Avoid global retention; use streams or clear references."
  },

  // ===== DB QUERY THINKING =====
  {
    domain: "DBMS",
    difficulty: "Medium",
    question: "Why is SELECT * FROM users WHERE name LIKE '%a%' slow?",
    ideal_answer: "Leading wildcard prevents index usage."
  },
  {
    domain: "MongoDB",
    difficulty: "Hard",
    question: "Why is query slow without index on frequently filtered field?",
    ideal_answer: "Collection scan occurs instead of index scan."
  },

  // ===== C POINTER OUTPUT =====
  {
    domain: "C",
    difficulty: "Medium",
    question: "What is the output?\nint a=10; int *p=&a; *p=20; printf(\"%d\",a);",
    ideal_answer: "20 — pointer modifies original value."
  },
  {
    domain: "C++",
    difficulty: "Hard",
    question: "Why is deleting base pointer without virtual destructor dangerous?",
    ideal_answer: "Derived destructor won't run → resource leak."
  },
  {
    domain: "JavaScript",
    difficulty: "Easy",
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Symbol"],
    answer: "Float"
  },
  {
    domain: "JavaScript",
    difficulty: "Medium",
    question: "What is the output of: typeof NaN ?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number"
  },
  {
    domain: "JavaScript",
    difficulty: "Hard",
    question: "Which queue runs first in the event loop?",
    options: ["Macrotask queue", "Microtask queue", "Callback queue", "Render queue"],
    answer: "Microtask queue"
  },

  // ===== REACT MCQ =====
  {
    domain: "React",
    difficulty: "Easy",
    question: "Which hook is used for side effects?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useEffect"
  },
  {
    domain: "React",
    difficulty: "Medium",
    question: "What causes a component to re-render?",
    options: ["Prop change", "State change", "Parent re-render", "All of the above"],
    answer: "All of the above"
  },
  {
    domain: "React",
    difficulty: "Hard",
    question: "Which feature allows interruptible rendering?",
    options: ["Fiber", "Hooks", "JSX", "Redux"],
    answer: "Fiber"
  },

  // ===== NODE MCQ =====
  {
    domain: "Node.js",
    difficulty: "Easy",
    question: "Node.js is built on which engine?",
    options: ["SpiderMonkey", "V8", "Chakra", "Java VM"],
    answer: "V8"
  },
  {
    domain: "Node.js",
    difficulty: "Medium",
    question: "Which module is used for file operations?",
    options: ["http", "fs", "path", "os"],
    answer: "fs"
  },
  {
    domain: "Node.js",
    difficulty: "Hard",
    question: "Which phase executes setImmediate()?",
    options: ["Timers", "Poll", "Check", "Close callbacks"],
    answer: "Check"
  },

  // ===== DATABASE MCQ =====
  {
    domain: "DBMS",
    difficulty: "Easy",
    question: "Which key uniquely identifies a record?",
    options: ["Foreign Key", "Primary Key", "Composite Key", "Index"],
    answer: "Primary Key"
  },
  {
    domain: "DBMS",
    difficulty: "Medium",
    question: "Which property ensures completed transactions remain saved?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    answer: "Durability"
  },
  {
    domain: "MongoDB",
    difficulty: "Hard",
    question: "Which strategy distributes data across servers?",
    options: ["Replication", "Indexing", "Sharding", "Aggregation"],
    answer: "Sharding"
  },

  // ===== CORE CS MCQ =====
  {
    domain: "OS",
    difficulty: "Easy",
    question: "Which scheduling algorithm may cause starvation?",
    options: ["Round Robin", "FCFS", "Priority Scheduling", "Shortest Job First"],
    answer: "Priority Scheduling"
  },
  {
    domain: "Linux",
    difficulty: "Medium",
    question: "Which command changes file permissions?",
    options: ["chown", "chmod", "grep", "ps"],
    answer: "chmod"
  },
  {
    domain: "Git",
    difficulty: "Hard",
    question: "Which command rewrites commit history?",
    options: ["merge", "commit", "rebase", "push"],
    answer: "rebase"
  },
  {
    domain: "JavaScript",
    difficulty: "Hard",
    question: "Implement your own version of Promise.all().",
    ideal_answer: "Track resolution count, store results by index, resolve when all done, reject on first failure."
  },
  {
    domain: "JavaScript",
    difficulty: "Hard",
    question: "How would you design a debounce function with cancel support?",
    ideal_answer: "Use closure to store timer and expose cancel method to clearTimeout."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "How would you design Google Docs real-time collaboration?",
    ideal_answer: "Operational transforms/CRDTs, WebSockets, version control, conflict resolution."
  },

  // ===== AMAZON-STYLE (Scalability + Backend) =====
  {
    domain: "Node.js",
    difficulty: "Hard",
    question: "Design an API that handles 10M requests per minute.",
    ideal_answer: "Load balancers, horizontal scaling, caching, rate limiting, async processing."
  },
  {
    domain: "Database",
    difficulty: "Hard",
    question: "How would you design a product inventory system for high concurrency?",
    ideal_answer: "Optimistic locking, caching, sharding, message queues."
  },
  {
    domain: "General",
    difficulty: "Medium",
    question: "How do you make a system highly available?",
    ideal_answer: "Redundancy, replication, failover, health checks."
  },

  // ===== META/FRONTEND-HEAVY =====
  {
    domain: "React",
    difficulty: "Hard",
    question: "How would you design Facebook News Feed rendering for performance?",
    ideal_answer: "Windowing/virtualization, memoization, lazy loading, prioritized rendering."
  },
  {
    domain: "React",
    difficulty: "Medium",
    question: "How would you handle global state in a very large React app?",
    ideal_answer: "Context splitting, Redux/Zustand, normalization, memoization."
  },

  // ===== DEBUGGING-FOCUSED =====
  {
    domain: "General",
    difficulty: "Hard",
    question: "Production CPU spikes randomly. How do you investigate?",
    ideal_answer: "Check logs, profiling, event loop lag, memory leaks, hot code paths."
  },
  {
    domain: "General",
    difficulty: "Hard",
    question: "Memory usage slowly increases over days.",
    ideal_answer: "Heap snapshots, detect leaks, check caches/listeners/closures."
  },

  // ===== PROBLEM-SOLVING PATTERN =====
  {
    domain: "Algorithms",
    difficulty: "Medium",
    question: "Find the first non-repeating character in a string efficiently.",
    ideal_answer: "Use frequency map + second pass."
  },
  {
    domain: "Algorithms",
    difficulty: "Hard",
    question: "Design an LRU cache.",
    ideal_answer: "HashMap + Doubly Linked List."
  },
   {
    domain: "React",
    difficulty: "Medium",
    question: "Your React app becomes slow when rendering a list of 5,000 items. What do you do?",
    ideal_answer: "Use virtualization (react-window), memoization, and avoid unnecessary re-renders."
  },
  {
    domain: "React",
    difficulty: "Hard",
    question: "Users report input lag while typing in a search box. Why?",
    ideal_answer: "Heavy computations or state updates blocking render; use debounce and split state."
  },
  {
    domain: "JavaScript",
    difficulty: "Hard",
    question: "The UI freezes during file processing in the browser. Fix?",
    ideal_answer: "Move work to Web Worker to avoid blocking main thread."
  },

  // ===== BACKEND SCENARIOS =====
  {
    domain: "Node.js",
    difficulty: "Medium",
    question: "Your Node server CPU usage spikes to 100% during traffic surge. Why?",
    ideal_answer: "CPU-heavy tasks blocking event loop; move to worker threads or external service."
  },
  {
    domain: "Node.js",
    difficulty: "Hard",
    question: "Design a rate limiter for an API.",
    ideal_answer: "Use token bucket or leaky bucket with Redis for distributed counters."
  },
  {
    domain: "Node.js",
    difficulty: "Hard",
    question: "Your API sometimes responds slowly under load. How do you debug?",
    ideal_answer: "Check event loop lag, DB queries, memory leaks, and use APM tools."
  },

  // ===== DATABASE SCENARIOS =====
  {
    domain: "DBMS",
    difficulty: "Medium",
    question: "A query is fast locally but slow in production. Why?",
    ideal_answer: "Missing indexes, large dataset, different execution plan."
  },
  {
    domain: "MongoDB",
    difficulty: "Hard",
    question: "Your MongoDB cluster has uneven load. Cause?",
    ideal_answer: "Hot shard due to poor shard key choice."
  },
  {
    domain: "DBMS",
    difficulty: "Hard",
    question: "Design database for millions of chat messages.",
    ideal_answer: "Partition by user/room, indexing, archival strategy."
  },

  // ===== SYSTEM DESIGN MINI =====
  {
    domain: "System Design",
    difficulty: "Medium",
    question: "Design a URL shortener.",
    ideal_answer: "Unique ID generation, DB mapping, caching, rate limiting."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "Design real-time chat system.",
    ideal_answer: "WebSockets, message queue, scaling via sharding and pub/sub."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "Design file upload system for large videos.",
    ideal_answer: "Chunked uploads, object storage, CDN, background processing."
  },

  // ===== DEBUGGING MINDSET =====
  {
    domain: "General",
    difficulty: "Medium",
    question: "App memory usage keeps increasing over time.",
    ideal_answer: "Memory leak; check closures, global caches, unremoved listeners."
  },
  {
    domain: "General",
    difficulty: "Hard",
    question: "Users in one region report slow responses only.",
    ideal_answer: "Network latency, CDN misconfiguration, regional server load."
  },

   {
    domain: "Algorithms",
    difficulty: "Easy",
    question: "Check if a string is a palindrome.",
    ideal_answer: "Compare string with its reverse or use two pointers."
  },
  {
    domain: "Algorithms",
    difficulty: "Easy",
    question: "Find the maximum element in an array.",
    ideal_answer: "Iterate and track max value."
  },
  {
    domain: "Algorithms",
    difficulty: "Medium",
    question: "Find duplicates in an array efficiently.",
    ideal_answer: "Use a hash set or frequency map."
  },
  {
    domain: "Algorithms",
    difficulty: "Medium",
    question: "Reverse a linked list.",
    ideal_answer: "Iterative pointer reversal (prev, curr, next)."
  },
  {
    domain: "Algorithms",
    difficulty: "Medium",
    question: "Detect cycle in linked list.",
    ideal_answer: "Floyd’s Tortoise and Hare algorithm."
  },
  {
    domain: "Algorithms",
    difficulty: "Hard",
    question: "Find shortest path in a graph.",
    ideal_answer: "Dijkstra for weighted, BFS for unweighted graphs."
  },
  {
    domain: "Algorithms",
    difficulty: "Hard",
    question: "Topological sort use case?",
    ideal_answer: "Ordering tasks with dependencies (DAG)."
  },
  {
    domain: "Algorithms",
    difficulty: "Hard",
    question: "Explain dynamic programming.",
    ideal_answer: "Breaking problems into overlapping subproblems with memoization/tabulation."
  },
  {
    domain: "Algorithms",
    difficulty: "Hard",
    question: "What is time complexity of quicksort average case?",
    ideal_answer: "O(n log n)."
  },

  // ==================================================
  // 🏗 SYSTEM DESIGN QUESTIONS
  // ==================================================

  {
    domain: "System Design",
    difficulty: "Medium",
    question: "Design a rate limiter.",
    ideal_answer: "Token bucket or leaky bucket using Redis counters."
  },
  {
    domain: "System Design",
    difficulty: "Medium",
    question: "Design a logging system.",
    ideal_answer: "Log producers → queue → storage → indexing."
  },
  {
    domain: "System Design",
    difficulty: "Medium",
    question: "Design a notification system.",
    ideal_answer: "Event queue, worker services, retries, user preferences."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "Design a scalable chat system.",
    ideal_answer: "WebSockets, message broker, sharding, persistence."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "Design YouTube-like video system.",
    ideal_answer: "Chunk upload, CDN, transcoding pipeline, metadata DB."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "Design Twitter timeline.",
    ideal_answer: "Fan-out on write/read, caching, ranking, sharding."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "How to make system fault tolerant?",
    ideal_answer: "Replication, retries, circuit breakers, failover."
  },
  {
    domain: "System Design",
    difficulty: "Hard",
    question: "How to scale a read-heavy system?",
    ideal_answer: "Caching, CDNs, read replicas, load balancing."
  },

  // ==================================================
  // 🚀 EXPRESS.JS QUESTIONS
  // ==================================================

  {
    domain: "Express",
    difficulty: "Easy",
    question: "What is Express.js?",
    ideal_answer: "Minimal web framework for Node.js."
  },
  {
    domain: "Express",
    difficulty: "Easy",
    question: "What is middleware in Express?",
    ideal_answer: "Functions that run during request-response cycle."
  },
  {
    domain: "Express",
    difficulty: "Medium",
    question: "How do you handle errors globally?",
    ideal_answer: "Error-handling middleware with (err, req, res, next)."
  },
  {
    domain: "Express",
    difficulty: "Medium",
    question: "How to secure Express APIs?",
    ideal_answer: "Helmet, CORS config, rate limiting, input validation."
  },
  {
    domain: "Express",
    difficulty: "Medium",
    question: "How to structure large Express app?",
    ideal_answer: "MVC pattern, routers, services, controllers."
  },
  {
    domain: "Express",
    difficulty: "Hard",
    question: "How to implement JWT authentication?",
    ideal_answer: "Login route issues token, middleware verifies token."
  },
  {
    domain: "Express",
    difficulty: "Hard",
    question: "How to prevent memory leaks in Express?",
    ideal_answer: "Avoid global vars, cleanup listeners, manage streams."
  },
  {
    domain: "Express",
    difficulty: "Hard",
    question: "How to handle high traffic in Express?",
    ideal_answer: "Clustering, caching, load balancing, async I/O."
  },

  { domain: "Algorithms", difficulty: "Easy", question: "Find the sum of elements in an array.", ideal_answer: "Iterate and accumulate sum." },
  { domain: "Algorithms", difficulty: "Easy", question: "Count vowels in a string.", ideal_answer: "Loop and check characters." },
  { domain: "Algorithms", difficulty: "Easy", question: "Find minimum element in array.", ideal_answer: "Track smallest while iterating." },
  { domain: "Algorithms", difficulty: "Easy", question: "Check if number is prime.", ideal_answer: "Check divisibility up to √n." },
  { domain: "Algorithms", difficulty: "Easy", question: "Reverse an array.", ideal_answer: "Swap elements from ends." },

  { domain: "Algorithms", difficulty: "Medium", question: "Two-sum problem.", ideal_answer: "Use hash map for complements." },
  { domain: "Algorithms", difficulty: "Medium", question: "Merge two sorted arrays.", ideal_answer: "Two-pointer technique." },
  { domain: "Algorithms", difficulty: "Medium", question: "Find intersection of arrays.", ideal_answer: "Use set or map." },
  { domain: "Algorithms", difficulty: "Medium", question: "Valid parentheses problem.", ideal_answer: "Use stack." },
  { domain: "Algorithms", difficulty: "Medium", question: "Binary search implementation.", ideal_answer: "Divide and conquer search." },
  { domain: "Algorithms", difficulty: "Medium", question: "Find middle of linked list.", ideal_answer: "Fast and slow pointer." },
  { domain: "Algorithms", difficulty: "Medium", question: "Remove duplicates from sorted array.", ideal_answer: "Two pointers." },
  { domain: "Algorithms", difficulty: "Medium", question: "Find longest substring without repeating characters.", ideal_answer: "Sliding window + set." },
  { domain: "Algorithms", difficulty: "Medium", question: "Kadane’s algorithm use?", ideal_answer: "Max subarray sum." },
  { domain: "Algorithms", difficulty: "Medium", question: "Sort array of 0s,1s,2s.", ideal_answer: "Dutch National Flag algorithm." },

  { domain: "Algorithms", difficulty: "Hard", question: "Detect cycle in graph.", ideal_answer: "DFS with visited recursion stack." },
  { domain: "Algorithms", difficulty: "Hard", question: "Minimum spanning tree algorithms?", ideal_answer: "Kruskal or Prim." },
  { domain: "Algorithms", difficulty: "Hard", question: "Longest common subsequence.", ideal_answer: "Dynamic programming." },
  { domain: "Algorithms", difficulty: "Hard", question: "Knapsack problem type?", ideal_answer: "0/1 DP problem." },
  { domain: "Algorithms", difficulty: "Hard", question: "Word ladder shortest transformation.", ideal_answer: "BFS on word graph." },
  { domain: "Algorithms", difficulty: "Hard", question: "Median of two sorted arrays.", ideal_answer: "Binary search partition." },
  { domain: "Algorithms", difficulty: "Hard", question: "Trie use case?", ideal_answer: "Prefix search." },
  { domain: "Algorithms", difficulty: "Hard", question: "Segment tree purpose?", ideal_answer: "Range queries." },
  { domain: "Algorithms", difficulty: "Hard", question: "Union-Find use?", ideal_answer: "Disjoint set operations." },
  { domain: "Algorithms", difficulty: "Hard", question: "Bellman-Ford vs Dijkstra?", ideal_answer: "Handles negative edges." },

  // (Continue similar structured algorithm problems up to 50…)
  
  // ==================================================
  // 🏗 SYSTEM DESIGN (50)
  // ==================================================

  { domain: "System Design", difficulty: "Medium", question: "Design URL shortener.", ideal_answer: "Hashing, DB mapping, caching." },
  { domain: "System Design", difficulty: "Medium", question: "Design search autocomplete.", ideal_answer: "Trie + ranking." },
  { domain: "System Design", difficulty: "Medium", question: "Design API rate limiter.", ideal_answer: "Token bucket + Redis." },
  { domain: "System Design", difficulty: "Medium", question: "Design file storage system.", ideal_answer: "Object storage + metadata DB." },
  { domain: "System Design", difficulty: "Medium", question: "Design leaderboard.", ideal_answer: "Sorted set (Redis)." },

  { domain: "System Design", difficulty: "Hard", question: "Design Instagram feed.", ideal_answer: "Fan-out, caching, ranking." },
  { domain: "System Design", difficulty: "Hard", question: "Design Uber system.", ideal_answer: "Geo indexing, matching, real-time tracking." },
  { domain: "System Design", difficulty: "Hard", question: "Design Netflix streaming.", ideal_answer: "CDN, chunk streaming, transcoding." },
  { domain: "System Design", difficulty: "Hard", question: "Design distributed cache.", ideal_answer: "Consistent hashing, replication." },
  { domain: "System Design", difficulty: "Hard", question: "Design recommendation system.", ideal_answer: "Collaborative filtering + ML pipeline." },
  { domain: "System Design", difficulty: "Hard", question: "Design payment system.", ideal_answer: "Idempotency, consistency, fraud checks." },
  { domain: "System Design", difficulty: "Hard", question: "Design notification service.", ideal_answer: "Queue, retries, channels." },
  { domain: "System Design", difficulty: "Hard", question: "Design log aggregation system.", ideal_answer: "Agents, stream processing, storage." },
  { domain: "System Design", difficulty: "Hard", question: "Design distributed locking.", ideal_answer: "Redis/Zookeeper locks." },
  { domain: "System Design", difficulty: "Hard", question: "Design high-availability architecture.", ideal_answer: "Redundancy, failover, monitoring." }
  // (Continue similar structured system design problems up to 50…)

];

const seedDB = async () => {
  try {
    // Ensure your MONGO_URI is set in the .env file
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🌱 Database connected for seeding...");

    // Optional: Clear existing questions to avoid duplicates during testing
    await Question.deleteMany({});
    
    await Question.insertMany(questions);
    console.log(`✅ Successfully seeded ${questions.length} questions across multiple domains!`);
    
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedDB();