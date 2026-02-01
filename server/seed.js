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
  }
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