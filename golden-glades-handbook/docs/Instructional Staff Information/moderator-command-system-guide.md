---
sidebar_position: 2
sidebar_label: Moderator Commands & Systems Guide
title: Moderator Commands & Systems Guide
description: Technical guide for Instructional Staff on executing hidden moderator commands, issuing passes, and checking student inventories.
---

# Moderator Commands & System Guide

### Overview

Instructional Staff members (Substitute Teachers, Core Teachers, and Elective Teachers) are granted access to the grading system and student monitoring tools to manage classroom progression and maintain academic integrity. This guide details how to use your commands responsibly, how to keep them hidden, and the rules governing their execution.

### Command Directory

As a teacher, you have access to two specialized commands designed to manage student movement and monitor classroom behavior:

* **`:pass [username] [name of pass]`** – Officially issues a temporary digital hall pass to a student, allowing them to legally navigate the campus outside of the classroom.
* **`:viewtools [username]`** – Allows the instructor to see what tools a student has in their inventory. Use this to ensure students do not have unauthorized items out during class.

### Pass Categories

When using the `:pass` command, the `[name of pass]` must exactly match one of the three authorized categories:

* **Late** – Issued to students who arrive to your classroom after the session has officially started.
* **Bathroom** – Issued to students who request permission to use the restroom facilities during class.
* **Nurse** – Issued to students who need to leave your classroom to visit the clinic.

Examples:
* `/e :pass lilman110200 Bathroom`
* `/e :viewtools lilman110200`

### Hidden Execution Rules

To maintain professional presentation and prevent the game chat from becoming cluttered with code, all commands must be hidden from the public chat log.

**The /e Prefix:** You must always type `/e` before running your commands if you are typing them directly into the public chat box (e.g., `/e :viewtools [username]`). This processes the command silently so regular players cannot see it.

**The Console GUI:** Alternatively, if available, you can enter commands prefix-free by typing them directly into your built-in command bar or panel interface, which naturally keeps your inputs completely invisible to students.

**Consequences:** Repeatedly typing visible commands in public chat shows a lack of technical care and can result in disciplinary warnings.

### Responsible Command Usage

Commands are strict administrative privileges meant for student safety and classroom management, not entertainment.

**No Abuse:** Running inventory checks repeatedly without reason, issuing random passes to players who are sitting in class, or using commands on other staff members is strictly classified as admin abuse.

**Evaluation & Monitoring Standards:** Only use `:viewtools` if you suspect a student has an item that is disrupting the lesson, and only issue a pass when a student explicitly requests it for a valid reason.