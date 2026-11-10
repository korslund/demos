// The video tour script for black2rc.html. Edit freely: open black2rc.html?edit and the page
// reloads this file about once a second, so saving here updates the preview where you are.
//
// The tour is a list of scenes, played in order. Each scene has:
//   name:   shown in the editor panel
//   length: seconds
//   keys:   keyframes. t = seconds from the start of THIS scene (0 .. length), plus any values to
//           reach at that moment.
//
// Rules:
// - A value moves smoothly from where it was to the value in the next key that mentions it. Values
//   a key doesn't mention keep doing their own thing, so e.g. azim can turn slowly across
//   the whole scene while dist changes only in the first half.
// - Every scene starts where the previous one ended. A value given at t: 0 jumps there at once,
//   so a key at t: 0 that sets the camera is a cut.
// - On/off and choice values (disk, sky, stars, ...) switch at their key's time.
// - ease: how the motion INTO this key goes. 'smooth' (default: slow start and stop),
//   'linear' (constant speed: use it to keep a turn going across keys or scenes),
//   'in' (starts slow), 'out' (ends slow).
//
// Values (the same as in the GUI):
//   dist       distance from the hole, in M (horizon 2, photon sphere 3). Moves evenly in
//              log(dist - 2), like the mouse wheel, so dives look even.
//   elev       elevation above the disk plane, degrees (-89 .. 89)
//   azim       orbit angle, degrees. Not wrapped: -150 -> 210 turns a full 360.
//   fov        field of view, degrees, on the shorter side of the screen
//   lookYaw    look left/right away from the hole, degrees (180 = look straight out)
//   lookPitch  look up/down, degrees
//   disk       true / false
//   sky        'milky way' / 'grid' / 'off'
//   stars      true / false
//   exposureEV, milky, starSize, starSigma, starGain, rIn, rOut, timeScale (disk spin speed), ...
//
// Tip: in the editor panel, "copy camera" gives you a key for the current view, ready to paste.

var TOUR = [
//*
  {
    name: 'edge',
    length: 4.8,
    keys:[
      { t: 0, disk:true, dist: 35, elev: 25.3, azim: -3.7, fov: 60, lookYaw: 0, lookPitch: 0 },
      { t: 4.8, elev: -5.5, azim: -62, ease: 'linear'},
      ],
  },
  {
    name: 'lensing',
    length: 3,
    keys: [
      { t: 0, dist: 93.34, elev: 4.9, azim: -163.1, fov: 48, disk:false},
      { t: 3, elev: -2.4, azim: -135, ease: 'linear'},
    ],
  },
  {
    name: 'topdown',
    length: 3,
    keys: [
      { t: 0, disk:true, dist: 36.62, elev: 3.7, azim: 100, fov: 21.5, lookYaw: 0, lookPitch: 7.5 },
      { t: 3, azim:30, ease:'linear'}
    ],
  },
//*
  {
    name: 'close',
    length: 3,
    keys:[
      { t: 0, disk:true, dist: 8.6, elev: 4, azim: 0, fov: 75, lookYaw: -63, lookPitch: 14.5 },
      { t: 3, elev: 1, azim: 96, ease:'linear' },
      ],
  },
  {
    name: 'grid',
    length: 1.6,
    keys:[
      { t: 0, dist: 45.03, elev: -1, azim: 22.8, fov: 60, lookYaw: 0, lookPitch: 0, disk:false, sky:'grid' },
      { t: 1.6, elev: -12.5, azim: -15.8, ease:'linear'},
      ],
  },
//*/
  {
    name: 'dive',
    length: 13.7,
    keys: [
      { t: 0, disk:true, sky:'milky way', dist: 91.18, elev: 11.8, azim: -45.5, fov: 60, lookYaw: 0, lookPitch: 0 },
      { t: 3.197, dist: 8, lookYaw: -50, ease:'linear'},
      { t: 5.389, dist: 2.3, lookYaw: -120, ease:'linear' },
      { t: 7.489, dist: 2.05, lookYaw: -170, ease:'linear'},
      { t: 10.96, dist: 2.003, lookYaw: -180, azim: 90, ease:'linear'},
      { t: 13.7, dist: 2.0003, ease:'linear'}
    ],
  },
//*/
/*
  {
    name: 'dive',
    length: 15,
    keys: [
      { t: 0, disk:true, sky:'milky way', dist: 91.18, elev: 11.8, azim: -45.5, fov: 60, lookYaw: 0, lookPitch: 0 },
      { t: 3.5, dist: 8, lookYaw: -50, ease:'linear'},
      { t: 5.9, dist: 2.3, lookYaw: -120, ease:'linear' },
      { t: 8.2, dist: 2.05, lookYaw: -170, ease:'linear'},
      { t: 12, dist: 2.003, lookYaw: -180, azim: 90, ease:'linear'},
      { t: 15, dist: 2.0003, ease:'linear'}
    ],
  },
//*/
];

// (Lets Node scripts load this file too.)
if (typeof module !== 'undefined') module.exports = TOUR;
